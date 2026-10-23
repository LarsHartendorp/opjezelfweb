import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getArticle, getArticles, getPublishedArticles } from "@/lib/articles";
import { getCategory, getCategoryPath, getSubcategory } from "@/lib/categories";
import styles from "./page.module.css";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getArticles()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.description,
    ...(article.draft && { robots: { index: false, follow: true } }),
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  const category = getCategory(article.category);
  const categoryHref = getCategoryPath(category.id);
  const subcategory = getSubcategory(category.id, article.subcategory);
  const hasSection = (await getPublishedArticles()).some((topic) =>
    topic.category === category.id && topic.subcategory === subcategory.id);
  const returnHref = hasSection ? `${categoryHref}#${subcategory.id}` : categoryHref;
  return (
    <main id="inhoud" tabIndex={-1} className={styles.main}>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: category.label, href: categoryHref },
        { label: article.title },
      ]} />
      <article>
        <header className={styles.heading}>
          <p className={styles.category}>{category.label}</p>
          <h1>{article.title}</h1>
          <p className={styles.description}>{article.description}</p>
          {article.draft && <div className={styles.draft}>
            <Badge color="orange" variant="light">Conceptartikel</Badge>
            <p>Dit artikel is nog in bewerking en niet volledig inhoudelijk gecontroleerd.</p>
          </div>}
          <p className={styles.reviewed}>
            {article.reviewedAt ? <>Inhoudelijk gecontroleerd op <time dateTime={article.reviewedAt}>{new Intl.DateTimeFormat("nl-NL", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${article.reviewedAt}T00:00:00Z`))}</time>.</> : "Nog niet inhoudelijk gecontroleerd."}
          </p>
        </header>
        <div className={styles.prose}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={["input"]} unwrapDisallowed>{article.content}</ReactMarkdown>
        </div>
        <section className={styles.sources} aria-labelledby="bronnen-titel">
          <h2 id="bronnen-titel">Bronnen en verder lezen</h2>
          <p>Lees de informatie van de bron voor meer uitleg en de actuele details.</p>
          <ul>{article.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul>
        </section>
      </article>
      <Link className={styles.returnLink} href={returnHref}>← Terug naar {hasSection ? subcategory.label : category.label}</Link>
    </main>
  );
}
