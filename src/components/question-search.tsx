"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { searchEntries, type SearchEntry } from "@/lib/search";
import styles from "./question-search.module.css";

export function QuestionSearch({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const active = query.trim().length > 0;
  const results = active ? searchEntries(entries, query) : entries.filter((entry) => entry.kind === "question").slice(0, 8);
  const questions = results.filter((entry) => entry.kind === "question");
  const guides = results.filter((entry) => entry.kind === "guide");

  return (
    <section id="zoeken" className={styles.section} aria-label="Vragen en antwoorden zoeken">
      <form role="search" className={styles.search} onSubmit={(event) => { event.preventDefault(); heading.current?.focus(); }}>
        <label htmlFor="zoekvraag">Waar wil je antwoord op?</label>
        <div className={styles.controls}>
          <input id="zoekvraag" name="q" type="search" value={query} maxLength={160}
            placeholder="Bijvoorbeeld: borg, afvalpas of vloerverwarming"
            aria-describedby="zoektip" aria-controls="zoekresultaten"
            onChange={(event) => setQuery(event.currentTarget.value)} />
          <button type="submit">Zoeken</button>
        </div>
        <p id="zoektip">Zoek op een vraag of een paar woorden. Of open hieronder een vraag om het antwoord te lezen.</p>
      </form>
      <div id="zoekresultaten">
        <h2 ref={heading} tabIndex={-1}>{active ? "Zoekresultaten" : "Vragen voor je eigen plek"}</h2>
        <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">
          {active ? `${questions.length} ${questions.length === 1 ? "vraag" : "vragen"} en ${guides.length} ${guides.length === 1 ? "gids" : "gidsen"} gevonden.` : "Een selectie van korte antwoorden. Zoek om alle vragen en gidsen te vinden."}
        </p>
        {active && !results.length && <p>Geen antwoord gevonden. Probeer een korter woord, zoals ‘huur’, ‘vloer’ of ‘toeslag’, of bekijk de <a href="#categorieen">categorieën</a>.</p>}
        <div className={styles.questions}>
          {questions.map((entry) => entry.kind === "question" && (
            <details key={`${active}-${entry.url}`} className={styles.question} open={active}>
              <summary>{entry.title}</summary>
              <div className={styles.answer}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={["input"]} unwrapDisallowed>{entry.answer}</ReactMarkdown>
                <p><Link href={entry.url} prefetch={false} aria-label={`Eigen pagina: ${entry.title}`}>Eigen pagina van deze vraag →</Link></p>
                <p className={styles.meta}>Gecontroleerd op <time dateTime={entry.reviewedAt}>{new Intl.DateTimeFormat("nl-NL", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${entry.reviewedAt}T00:00:00Z`))}</time>.</p>
                <div className={styles.reading}>
                  {!!entry.guides.length && <><p>Meer uitleg</p>
                  <ul>{entry.guides.map((guide) => <li key={guide.url}><Link href={guide.url} prefetch={false}>{guide.title}</Link></li>)}</ul></>}
                  <p>Bronnen</p>
                  <ul>{entry.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul>
                </div>
              </div>
            </details>
          ))}
        </div>
        {!!guides.length && <section className={styles.guides} aria-labelledby="gidsresultaten">
          <h3 id="gidsresultaten">Meer uitleg in gidsen</h3>
          <ul>{guides.map((guide) => <li key={guide.url}>
            <Link href={guide.url} prefetch={false}>{guide.title}</Link>
            <p>{guide.description}</p>
          </li>)}</ul>
        </section>}
      </div>
      <noscript><p>Zoeken werkt met JavaScript. Je kunt de vragen hierboven gewoon openen en de categorieën hieronder gebruiken.</p></noscript>
    </section>
  );
}
