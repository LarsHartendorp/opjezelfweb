import Link from "next/link";
import { Badge } from "@mantine/core";
import { categories } from "@/lib/categories";
import { getArticles } from "@/lib/articles";
import styles from "./page.module.css";

export default async function Home() {
  const articles = await getArticles();
  return (
    <main id="inhoud" className={styles.main}>
      <section className={styles.hero} aria-labelledby="welkom">
        <p className={styles.eyebrow}>Je eigen plek begint hier</p>
        <h1 id="welkom">Een woning geaccepteerd.<br />En nu op jezelf.</h1>
        <p className={styles.intro}>Er komt veel kijken bij zelfstandig wonen. Hier vind je begrijpelijke uitleg en betrouwbare bronnen, zodat je weet waar je meer kunt lezen.</p>
        <a className={styles.jumpLink} href="#categorieen">Bekijk de onderwerpen <span aria-hidden="true">↓</span></a>
      </section>
      <section id="categorieen" aria-labelledby="categorieen-titel">
        <div className={styles.sectionHeading}>
          <h2 id="categorieen-titel">Waar wil je meer over weten?</h2>
          <p>Kies een onderwerp en lees rustig verder.</p>
        </div>
        <div className={styles.grid}>
          {categories.map((category) => {
            const topics = articles.filter((article) => article.category === category.id);
            return (
              <section key={category.id} id={category.id} className={styles.category} aria-labelledby={category.id + "-titel"}>
                <h3 id={category.id + "-titel"}>{category.label}</h3>
                <p>{category.description}</p>
                {topics.length ? <ul className={styles.topics}>
                  {topics.map((article) => <li key={article.slug}>
                    <Link href={"/onderwerpen/" + article.slug + "/"}>{article.title}</Link>
                    {article.draft && <Badge color="orange" variant="light" size="sm">Concept</Badge>}
                  </li>)}
                </ul> : <p className={styles.empty}>Er zijn nog geen artikelen in deze categorie.</p>}
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
