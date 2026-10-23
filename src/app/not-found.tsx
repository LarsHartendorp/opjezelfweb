import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return <main id="inhoud" className={styles.main}>
    <section className={styles.hero}>
      <h1>Deze pagina is er niet</h1>
      <p>Misschien is het adres veranderd of bestaat het onderwerp nog niet.</p>
      <Link href="/">Terug naar alle onderwerpen</Link>
    </section>
  </main>;
}
