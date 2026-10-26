import "server-only";
import { getPublishedArticles } from "./articles";
import { getCategory } from "./categories";
import type { SearchEntry } from "./search";

// Called by the statically exported homepage at build time. Never include guide bodies.
export async function getSearchIndex(): Promise<SearchEntry[]> {
  const articles = await getPublishedArticles();
  return articles.map((article): SearchEntry => {
    const entry = {
      title: article.title,
      url: `/onderwerpen/${article.slug}/`,
      description: article.description,
      category: getCategory(article.category).label,
      keywords: article.keywords,
    };
    if (article.kind === "guide") return { ...entry, kind: "guide" };
    return {
      ...entry, kind: "question", answer: article.content.trim(),
      reviewedAt: article.reviewedAt!,
      sources: article.sources.map(({ title, url }) => ({ title, url })),
      guides: article.guides.map((slug) => {
        const guide = articles.find((candidate) => candidate.slug === slug)!;
        return { title: guide.title, url: `/onderwerpen/${slug}/` };
      }),
    };
  });
}
