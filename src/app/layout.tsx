import type { Metadata } from "next";
import Link from "next/link";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: { default: "Op Jezelf — wegwijs in zelfstandig wonen", template: "%s | Op Jezelf" },
  description: "Een woning geaccepteerd? Lees begrijpelijke uitleg over zelfstandig wonen, van je huurcontract tot je huishouden, met links naar betrouwbare bronnen.",
  applicationName: "Op Jezelf",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" {...mantineHtmlProps}>
      <head><ColorSchemeScript forceColorScheme="light" /></head>
      <body>
        <MantineProvider forceColorScheme="light">
          <a className={styles.skipLink} href="#inhoud">Ga naar de inhoud</a>
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <Link href="/" className={styles.brand}>Op Jezelf<span className={styles.brandDot} aria-hidden="true">.</span></Link>
              <nav aria-label="Hoofdnavigatie"><Link href="/#categorieen">Alle onderwerpen</Link></nav>
            </div>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Op Jezelf · Wegwijs in zelfstandig wonen</p>
            <p>Lees bij elk artikel welke bronnen zijn gebruikt en wanneer de tekst is gecontroleerd.</p>
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
