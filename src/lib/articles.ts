import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { isCategoryId, isSubcategoryId, type CategoryId, type SubcategoryId } from "./categories";

export type ArticleSource = { title: string; url: string };
export type ArticleMetadata = {
  title: string;
  description: string;
  category: CategoryId;
  subcategory: SubcategoryId;
  sources: ArticleSource[];
  reviewedAt: string | null;
  draft: boolean;
};
export type Article = ArticleMetadata & { slug: string; content: string };

const articlesDirectory = path.join(process.cwd(), "content", "articles");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(filename: string, message: string): never {
  throw new Error(`Ongeldig artikel ${filename}: ${message}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredText(value: unknown, field: string, filename: string): string {
  if (typeof value !== "string" || !value.trim()) {
    fail(filename, `${field} moet een niet-lege tekst zijn.`);
  }
  return value.trim();
}

function validateMetadata(data: Record<string, unknown>, filename: string): ArticleMetadata {
  const title = requiredText(data.title, "title", filename);
  const description = requiredText(data.description, "description", filename);
  if (!isCategoryId(data.category)) fail(filename, "category moet een bestaande categorie-id zijn.");
  if (!isSubcategoryId(data.category, data.subcategory)) {
    fail(filename, "subcategory moet een bestaande subcategorie-id binnen de gekozen category zijn.");
  }
  if (!Array.isArray(data.sources) || data.sources.length === 0) {
    fail(filename, "sources moet minstens één bron bevatten.");
  }
  const sources = data.sources.map((source: unknown): ArticleSource => {
    if (!isRecord(source)) fail(filename, "elke bron moet title en url bevatten.");
    const title = requiredText(source.title, "sources.title", filename);
    const url = requiredText(source.url, "sources.url", filename);
    try {
      const parsed = new URL(url);
      if (!["https:", "http:"].includes(parsed.protocol) || parsed.username || parsed.password) {
        fail(filename, "een bron-url moet een openbare http(s)-url zijn.");
      }
    } catch {
      fail(filename, "sources.url moet een geldige http(s)-url zijn.");
    }
    return { title, url };
  });
  const reviewedAt: unknown = data.reviewedAt;
  if (reviewedAt !== null) {
    if (typeof reviewedAt !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(reviewedAt)) {
      fail(filename, 'reviewedAt is verplicht: gebruik null of een datum als "JJJJ-MM-DD".');
    }
    const date = new Date(`${reviewedAt}T00:00:00Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== reviewedAt) {
      fail(filename, "reviewedAt moet een bestaande kalenderdatum zijn.");
    }
  }
  if (typeof data.draft !== "boolean") fail(filename, "draft moet true of false zijn.");
  return { title, description, category: data.category, subcategory: data.subcategory, sources, reviewedAt, draft: data.draft };
}

// Alleen server/build-code importeert deze module.
export const getArticles = cache(async (): Promise<Article[]> => {
  const entries = await readdir(articlesDirectory, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));
  const articles = await Promise.all(files.map(async ({ name }) => {
    const slug = name.slice(0, -3);
    if (!slugPattern.test(slug)) fail(name, "gebruik kleine letters, cijfers en enkele koppeltekens in de bestandsnaam.");
    const raw = await readFile(path.join(articlesDirectory, name), "utf8");
    let parsed: ReturnType<typeof matter>;
    try {
      parsed = matter(raw);
    } catch {
      fail(name, "frontmatter kan niet als YAML worden gelezen.");
    }
    if (!parsed.content.trim()) fail(name, "de Markdown-inhoud mag niet leeg zijn.");
    const metadata = validateMetadata(parsed.data, name);
    return { ...metadata, slug, content: parsed.content };
  }));
  return articles.sort((a, b) => a.title.localeCompare(b.title, "nl"));
});

export async function getArticle(slug: string) {
  return (await getArticles()).find((article) => article.slug === slug);
}

export async function getPublishedArticles() {
  return (await getArticles()).filter((article) => !article.draft);
}
