import Link from "next/link";
import { QuestionSearch } from "@/components/question-search";
import { getPublishedArticles } from "@/lib/articles";
import { getCategoriesWithArticles, getCategoryPath } from "@/lib/categories";
import { getSearchIndex } from "@/lib/search-index";
import styles from "./page.module.css";

export default async function Home() {
  const articles = await getPublishedArticles();
  const visibleCategories = getCategoriesWithArticles(articles);
  const entries = await getSearchIndex();
  return (
    <main id="inhoud" tabIndex={-1} className={styles.main}>
      <section className={styles.hero} aria-labelledby="welkom">
        <p className={styles.eyebrow}>Je eigen plek begint hier</p>
        <h1 id="welkom">Een concrete vraag.<br />Een duidelijk antwoord.</h1>
        <p className={styles.intro}>Een woning geaccepteerd? Vind korte antwoorden over huren, regelen en inrichten. Met betrouwbare bronnen en meer uitleg als je die nodig hebt.</p>
      </section>
      <QuestionSearch entries={entries} />
      <section id="categorieen" aria-labelledby="categorieen-titel">
        <div className={styles.sectionHeading}>
          <h2 id="categorieen-titel">Liever rondkijken?</h2>
          <p>Bekijk vragen en gidsen per categorie.</p>
        </div>
        <nav aria-label="Categorieën">
          <ul className={styles.grid}>
            {visibleCategories.map((category) => (
              <li key={category.id} id={category.id}>
                <Link href={getCategoryPath(category.id)}>{category.label} <span aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
