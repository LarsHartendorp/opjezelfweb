# Op Jezelf

Een Nederlandstalige informatiewebsite voor mensen die een woning hebben geaccepteerd en zich voorbereiden op zelfstandig wonen. De site biedt begrijpelijke uitleg en verwijst naar gezaghebbende bronnen.

## Scope

Eén homepage met zeven categorieën en directe links naar bestaande artikelen. Eén gedeeld artikeltemplate op `/onderwerpen/[slug]/`. Geen accounts, database, onboarding, personalisatie, checkboxes, taakstatussen of voortgangsopslag.

De twee voorbeeldartikelen zijn zichtbare concepten (`draft: true`), nog niet inhoudelijk gecontroleerd (`reviewedAt: null`) en krijgen `noindex`. De overige categorieën bevatten alleen een melding dat er nog geen artikelen zijn. Bronverwijzingen zijn geen bewijs dat een artikel inhoudelijk is gecontroleerd.

## Ontwikkelen

Gebruik npm en behoud `package-lock.json`. De bestaande installatie gebruikt Next.js App Router, strict TypeScript, Mantine, CSS Modules, gray-matter, react-markdown en remark-gfm.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

De ontwikkelserver draait standaard op http://localhost:3000. Draai lint, typecheck en build afzonderlijk; `next build` vervangt de lintcontrole niet. `typecheck` gebruikt `tsc --noEmit`.

`npm run build` maakt een volledige statische export in `out/`. Publiceer die map bij een statische host. Dankzij `trailingSlash: true` krijgen artikelen een eigen map met `index.html`. Configureer de host om `404.html` te gebruiken voor ontbrekende bestanden. `next start` is niet geschikt voor deze export; voor een lokale exportpreview kun je met een geïnstalleerde Python bijvoorbeeld `python -m http.server 3000 --directory out` gebruiken. De build gebruikt systeemlettertypen en haalt geen fonts of artikelen van internet op. Opnieuw bouwen is nodig na inhoudswijzigingen.

## Een artikel toevoegen

1. Maak `content/articles/duidelijke-naam.md`. De bestandsnaam zonder `.md` bepaalt de slug; gebruik alleen kleine letters, cijfers en enkele koppeltekens. De URL wordt `/onderwerpen/duidelijke-naam/`. Gebruik geen aparte `slug` in de frontmatter.
2. Voeg YAML-frontmatter toe met alle onderstaande velden.
3. Schrijf de Nederlandstalige Markdown onder de afsluitende `---`. De template toont titel, beschrijving, conceptmelding, controledatum en bronnen; begin de inhoud met tekst en gebruik `##` voor secties.
4. Gebruik echte, gecontroleerde bron-URL's van gezaghebbende organisaties. Verzin geen juridische termijnen, prijzen of controledatums. Vul `reviewedAt` pas in na een echte inhoudelijke controle. Zet `draft` pas na redactionele beoordeling op `false`.
5. Draai lint, typecheck en build en controleer de pagina. Homepage en statische routes worden automatisch uit de bestanden afgeleid.

```yaml
---
title: Je huurcontract lezen
description: Leer waar je de afspraken over je woning vindt.
category: woning-en-huurcontract
sources:
  - title: "Rijksoverheid — Woning huren"
    url: https://www.rijksoverheid.nl/themas/bouwen-en-wonen/woning-huren
reviewedAt: null
draft: true
---
```

`title` en `description` zijn niet-lege teksten. `category` is een van de onderstaande ids. `sources` bevat minstens één object met een niet-lege `title` en geldige http(s)-`url`. `reviewedAt` is verplicht en is `null` (ook leeg YAML wordt null) of een bestaande kalenderdatum als geciteerde tekst `"JJJJ-MM-DD"`. Een ongeciteerde YAML-datum wordt afgewezen. `draft` is een verplichte boolean. Lege inhoud, ongeldige slugs en ongeldige metadata stoppen de build met de bestandsnaam in de foutmelding. URL-validatie controleert het formaat; beschikbaarheid en gezag van de bron blijven redactionele controles.

| Categorie-id | Label |
| --- | --- |
| woning-en-huurcontract | Woning en huurcontract |
| geld-en-woonlasten | Geld en woonlasten |
| adres-en-administratie | Adres en administratie |
| energie-water-en-internet | Energie, water en internet |
| verzekeringen | Verzekeringen |
| verhuizen-en-inrichten | Verhuizen en inrichten |
| huishouden-en-veiligheid | Huishouden en veiligheid |

## Structuur en afspraken

- `src/lib/articles.ts`: uitsluitend server/build-code, afgeschermd met `server-only`; lezen en valideren van lokale Markdown met gray-matter.
- `src/lib/categories.ts`: centrale categorieën en homepage-ankers.
- `src/app/onderwerpen/[slug]/page.tsx`: gedeeld template met react-markdown en remark-gfm, `generateStaticParams` en `dynamicParams = false`. Onbekende slugs krijgen een 404. Ruwe HTML wordt niet uitgevoerd; Markdown-taaklijsten renderen geen checkboxes.
- `src/app/layout.tsx`: Nederlands document, metadata, Mantine-CSS, `MantineProvider`, `ColorSchemeScript` en `mantineHtmlProps` volgens de officiële integratie: https://mantine.dev/guides/next/.
- `postcss.config.cjs`: Mantine-preset en breakpointvariabelen. Custom layouts en artikelopmaak staan in CSS Modules.

Het kleurenschema staat vast op licht in zowel provider als script, zonder keuzeschakelaar. Navigatie heeft zichtbare toetsenbordfocus, een skiplink, broodkruimels en een teruglink naar de juiste categorie. Gegenereerde mappen (`.next/`, `out/`, `build/`) en TypeScript-buildinformatie worden door Git genegeerd.

Lees voor Next.js-wijzigingen de documentatie van de geïnstalleerde versie onder `node_modules/next/dist/docs/`, zoals vastgelegd in `AGENTS.md`. Behoud de door Next.js gegenereerde instructies in dat bestand.
