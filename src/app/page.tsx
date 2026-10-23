import Link from "next/link";
import { categories, getCategoryPath } from "@/lib/categories";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="inhoud" tabIndex={-1} className={styles.main}>
      <section className={styles.hero} aria-labelledby="welkom">
        <p className={styles.eyebrow}>Je eigen plek begint hier</p>
        <h1 id="welkom">Een woning geaccepteerd.<br />En nu op jezelf.</h1>
        <p className={styles.intro}>Er komt veel kijken bij zelfstandig wonen. Hier vind je begrijpelijke uitleg en betrouwbare bronnen, zodat je weet waar je meer kunt lezen.</p>
        <a className={styles.jumpLink} href="#categorieen">Bekijk de categorieën <span aria-hidden="true">↓</span></a>
      </section>
      <section id="categorieen" aria-labelledby="categorieen-titel">
        <div className={styles.sectionHeading}>
          <h2 id="categorieen-titel">Waar wil je meer over weten?</h2>
          <p>Kies een categorie en ontdek de onderwerpen.</p>
        </div>
        <nav aria-label="Categorieën">
          <ul className={styles.grid}>
            {categories.map((category) => (
              <li key={category.id} id={category.id}>
                <Link href={getCategoryPath(category.id)} className={styles.category}
                  aria-labelledby={category.id + "-titel"} aria-describedby={category.id + "-beschrijving"}>
                  <h3 id={category.id + "-titel"}>{category.label}</h3>
                  <p id={category.id + "-beschrijving"}>{category.description}</p>
                  <span className={styles.cardAction} aria-hidden="true">Bekijk de categorie →</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
