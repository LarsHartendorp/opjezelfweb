// Run the installed TypeScript sources with Node's built-in test runner.
import fs from "node:fs";
import Module from "node:module";
import ts from "typescript";
import assert from "node:assert/strict";
import { test } from "node:test";
const source = Module.createRequire(import.meta.url);
const load = Module._load;
Module._load = function (name, ...args) {
  if (name === "server-only") return {};
  return load.call(this, name, ...args);
};
source.extensions[".ts"] = (module, filename) => module._compile(ts.transpileModule(
  fs.readFileSync(filename, "utf8"), { compilerOptions: { target: ts.ScriptTarget.ES2017, module: ts.ModuleKind.CommonJS, esModuleInterop: true } },
).outputText, filename);
const { searchEntries, normalize, getHomepageQuestions, getSearchPage, HOMEPAGE_QUESTION_LIMIT, HOMEPAGE_QUESTION_SLUGS, SEARCH_PAGE_SIZE } = source("../src/lib/search.ts");
const { getSearchIndex } = source("../src/lib/search-index.ts");
const { getArticles, getPublishedArticles } = source("../src/lib/articles.ts");
const { categories, getCategoriesWithArticles } = source("../src/lib/categories.ts");
const indexPromise = getSearchIndex();

test("homepage omits empty categories without changing definitions", () => {
  assert.deepEqual(getCategoriesWithArticles([]), []);
  const present = getCategoriesWithArticles([{ category: "geld-en-woonlasten" }]);
  assert.deepEqual(present.map((category) => category.id), ["geld-en-woonlasten"]);
  assert.equal(categories.length, 7);
});

test("Dutch case, accents and useful alternatives", async () => {
  const index = await indexPromise;
  assert.equal(normalize("ÉÉN VRAAG!"), "een vraag");
  for (const [query, slug] of [
    ["WAARBORGSOM", "hoeveel-borg-mag-de-verhuurder-vragen"],
    ["milieupas", "hoe-vraag-ik-een-afvalpas-aan"],
    ["elektra contract", "moet-ik-zelf-een-energiecontract-afsluiten"],
    ["onderlaag", "moet-er-een-ondervloer-onder-mijn-vloer"],
    ["huurtoeslag kamer", "kan-ik-huurtoeslag-krijgen-voor-een-kamer"],
    ["netto inkomen", "welk-inkomen-geef-ik-op-voor-toeslagen"],
    ["beginstanden", "welke-meterstanden-noteer-ik-bij-de-sleuteloverdracht"],
  ]) {
    const matches = searchEntries(index, query);
    assert(matches.some((entry) => entry.url === `/onderwerpen/${slug}/`), query);
    assert.equal(matches[0].kind, "question", query);
  }
});

test("question relevance, guide fallback, empty and no results", async () => {
  const index = await indexPromise;
  assert.equal(searchEntries(index, "hoeveel borg")[0].url, "/onderwerpen/hoeveel-borg-mag-de-verhuurder-vragen/");
  assert(searchEntries(index, "inboedel").some((entry) => entry.kind === "guide"));
  assert.deepEqual(searchEntries(index, "   "), []);
  assert.deepEqual(searchEntries(index, "qzxv"), []);
  assert.deepEqual(searchEntries(index, "borg qzxv"), []);
  const results = searchEntries(index, "huur");
  const firstGuide = results.findIndex((entry) => entry.kind === "guide");
  assert(results.slice(firstGuide).every((entry) => entry.kind === "guide"));
});

test("homepage selection stays deliberate as the collection grows", async () => {
  const index = await indexPromise;
  const selected = getHomepageQuestions(index);
  assert.equal(HOMEPAGE_QUESTION_LIMIT, 6);
  assert.equal(selected.length, HOMEPAGE_QUESTION_LIMIT);
  assert.deepEqual(selected.map((entry) => entry.url), HOMEPAGE_QUESTION_SLUGS.map((slug) => `/onderwerpen/${slug}/`));
  assert(selected.every((entry) => entry.kind === "question"));
  const extra = { ...selected[0], url: "/onderwerpen/een-nieuwe-vraag/", title: "Achteraf toegevoegde vraag" };
  assert.deepEqual(getHomepageQuestions([extra, ...index].reverse()), selected);
  assert.equal(getHomepageQuestions(index.filter((entry) => entry.url !== selected[0].url)).length, 5);
  assert.deepEqual(getHomepageQuestions([]), []);
});

test("pagination preserves every ranked result, including the last page", async () => {
  const index = await indexPromise;
  assert.equal(SEARCH_PAGE_SIZE, 8);
  const results = searchEntries(index, "a");
  assert(results.length > SEARCH_PAGE_SIZE * 2, "Exercise at least three real result pages with a broad query");
  const collected = [];
  const totalPages = Math.ceil(results.length / SEARCH_PAGE_SIZE);
  for (let page = 1; page <= totalPages; page++) {
    const current = getSearchPage(results, page);
    assert.equal(current.currentPage, page);
    assert.equal(current.totalPages, totalPages);
    assert(current.items.length <= SEARCH_PAGE_SIZE);
    assert.equal(current.firstResult, collected.length + 1);
    collected.push(...current.items);
    assert.equal(current.lastResult, collected.length);
  }
  assert.deepEqual(collected, results);
  assert.equal(new Set(collected.map((entry) => entry.url)).size, results.length);
  const few = searchEntries(index, "milieupas");
  assert(few.length > 0 && few.length < SEARCH_PAGE_SIZE);
  assert.deepEqual(getSearchPage(few, 1).items, few);
  assert.equal(getSearchPage(few, 3).currentPage, 1);
  assert.deepEqual(getSearchPage([], 1), { items: [], currentPage: 1, totalPages: 0, firstResult: 0, lastResult: 0 });
});

test("index uses canonical answers, valid destinations and no full guide bodies", async () => {
  const index = await indexPromise;
  const articles = await getPublishedArticles();
  assert.equal(index.length, articles.length);
  assert.equal(index.filter((entry) => entry.kind === "question").length, articles.filter((article) => article.kind === "question").length);
  assert.equal(new Set(index.map((entry) => entry.url)).size, index.length);
  for (const entry of index) {
    const article = articles.find((item) => entry.url === `/onderwerpen/${item.slug}/`);
    assert(article && !article.draft);
    assert(!("content" in entry) && !("draft" in entry));
    if (entry.kind === "question") {
      assert.equal(entry.answer, article.content.trim());
      assert(entry.guides.length && entry.sources.length && entry.reviewedAt);
      for (const guide of entry.guides) assert(articles.some((item) => item.kind === "guide" && guide.url === `/onderwerpen/${item.slug}/`));
    } else {
      assert(!("answer" in entry));
      assert.equal(entry.description, article.description);
      assert(!JSON.stringify(index).includes(article.content.trim()));
    }
  }
  assert(Buffer.byteLength(JSON.stringify(index)) < index.length * 1500, "Keep the search index compact as the collection grows (average under 1.5 kB per item)");
  console.log(`Search index: ${index.length} entries, ${Buffer.byteLength(JSON.stringify(index))} bytes`);
});

test("new questions outside the featured selection are findable by title and everyday wording", async () => {
  const index = await indexPromise;
  const featured = getHomepageQuestions(index).map((entry) => entry.url);
  for (const [slug, phrase] of [
    ["hoe-leg-ik-bestaande-schade-aan-mijn-huurwoning-vast", "schade oplevering"],
    ["wie-betaalt-reparaties-in-mijn-huurwoning", "onderhoud verhuurder"],
    ["wat-heb-ik-nodig-om-mijn-verhuizing-online-door-te-geven", "verhuizing DigiD"],
    ["hoe-controleer-ik-of-mijn-nieuwe-adres-goed-is-ingeschreven", "verhuizing verwerkt"],
    ["hoe-vraag-ik-kwijtschelding-van-gemeentelijke-belastingen-aan", "belasting kwijtschelding"],
    ["wat-is-het-verschil-tussen-inboedel-en-opstalverzekering", "spullen gebouw verzekering"],
    ["moeten-ventilatieroosters-ook-in-de-winter-openblijven", "roosters winter"],
    ["hoe-herken-ik-vochtproblemen-en-schimmel-in-huis", "muffe lucht muren"],
    ["moet-ik-bij-stadsverwarming-zelf-een-warmtecontract-afsluiten", "warmte via verhuurder"],
    ["wanneer-krijg-ik-de-jaarafrekening-van-servicekosten", "servicekosten afrekening ontbreekt"],
    ["hoe-controleer-ik-of-ik-zorgtoeslag-kan-krijgen", "zorgpremie toeslag"],
    ["wat-houd-ik-apart-voor-de-eerste-avond-en-nacht", "eerste nacht spullen"],
  ]) {
    const url = `/onderwerpen/${slug}/`;
    const question = index.find((entry) => entry.url === url);
    assert(question && question.kind === "question", slug);
    assert(!featured.includes(url), "New questions must not change the curated homepage");
    assert.equal(searchEntries(index, question.title)[0].url, url, question.title);
    const matches = searchEntries(index, phrase);
    assert(getSearchPage(matches, 1).items.some((entry) => entry.url === url), phrase);
    const allPages = Array.from({ length: getSearchPage(matches, 1).totalPages }, (_, page) => getSearchPage(matches, page + 1).items).flat();
    assert.deepEqual(allPages, matches);
  }
});

test("draft URLs are absent and every published item is searchable", async () => {
  const index = await indexPromise;
  const articles = await getArticles();
  const urls = new Set(index.map((entry) => entry.url));
  for (const article of articles) {
    assert.equal(urls.has(`/onderwerpen/${article.slug}/`), !article.draft, article.slug);
  }
});
