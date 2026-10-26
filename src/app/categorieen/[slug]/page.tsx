import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPublishedArticles } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";
import styles from "./page.module.css";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug((await params).slug);
  if (!category) notFound();
  return { title: category.label, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug((await params).slug);
  if (!category) notFound();
  const articles = (await getPublishedArticles()).filter((article) => article.category === category.id);

  return (
    <main id="inhoud" tabIndex={-1} className={styles.main}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.label }]} />
      <header className={styles.heading}>
        <h1>{category.label}</h1>
        <p>{category.description}</p>
      </header>
      {articles.length ? category.subcategories.map((subcategory) => {
        const topics = articles.filter((article) => article.subcategory === subcategory.id);
        if (!topics.length) return null;
        return (
          <section key={subcategory.id} id={subcategory.id} className={styles.section}
            aria-labelledby={subcategory.id + "-titel"}>
            <h2 id={subcategory.id + "-titel"}>{subcategory.label}</h2>
            <ul className={styles.articles}>
              {topics.map((article) => (
                <li key={article.slug}>
                  <Link href={`/onderwerpen/${article.slug}/`} className={styles.article}
                    aria-labelledby={article.slug + "-titel"} aria-describedby={article.slug + "-beschrijving"}>
                    <span className={styles.kind}>{article.kind === "question" ? "Kort antwoord" : "Gids"}</span>
                    <h3 id={article.slug + "-titel"}>{article.title}</h3>
                    <p id={article.slug + "-beschrijving"}>{article.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      }) : <p className={styles.empty}>Er zijn nog geen gepubliceerde artikelen in deze categorie.</p>}
      <Link className={styles.returnLink} href="/#categorieen">← Terug naar alle categorieën</Link>
    </main>
  );
}
