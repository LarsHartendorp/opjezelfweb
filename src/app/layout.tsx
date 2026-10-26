import type { Metadata } from "next";
import Link from "next/link";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: { default: "Op Jezelf — wegwijs in zelfstandig wonen", template: "%s | Op Jezelf" },
  description: "Een woning geaccepteerd? Zoek korte antwoorden op je vragen over huren, regelen en inrichten, met betrouwbare bronnen en praktische gidsen.",
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
              <nav aria-label="Hoofdnavigatie"><Link href="/#zoeken">Vragen en zoeken</Link></nav>
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
