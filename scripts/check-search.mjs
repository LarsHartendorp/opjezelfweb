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
const { searchEntries, normalize } = source("../src/lib/search.ts");
const { getSearchIndex } = source("../src/lib/search-index.ts");
const { getPublishedArticles } = source("../src/lib/articles.ts");
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

test("index uses canonical answers, valid destinations and no full guide bodies", async () => {
  const index = await indexPromise;
  const articles = await getPublishedArticles();
  assert.equal(index.length, articles.length);
  assert.equal(index.filter((entry) => entry.kind === "question").length, 12);
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
  assert(Buffer.byteLength(JSON.stringify(index)) < 40000, "Keep the inline search index compact");
  console.log(`Search index: ${index.length} entries, ${Buffer.byteLength(JSON.stringify(index))} bytes`);
});
