# Op Jezelf

Een Nederlandstalige informatiewebsite voor mensen die een woning hebben geaccepteerd en zich voorbereiden op zelfstandig wonen. De site biedt begrijpelijke uitleg en verwijst naar gezaghebbende bronnen.

## Scope

Drie paginatypen: de homepage `/` met zoeken en direct leesbare korte antwoorden, categoriepagina's op `/categorieen/[slug]/` en vraag-/gidspagina's op `/onderwerpen/[slug]/`. Categorieën staan compact onderaan de homepage; lege categorieën verdwijnen alleen daar, hun definities en routes blijven bestaan. Subcategorieën behouden hun vaste ankers. Geen accounts, database, onboarding, personalisatie, checkboxes, taakstatussen of voortgangsopslag.

Er zijn 22 bestaande gidsen en 12 nieuwe zelfstandige korte antwoorden. De korte vragen gaan over borg, servicekosten, afvalpas, energie, netbeheer, meterstanden, boren, vloeren en toeslagen. Ze zijn na primaire broncontrole gepubliceerd met `reviewedAt: "2026-10-26"`. Alle bestaande gidsbestanden, URL's en controledatums zijn behouden.

De [ideeëninventaris](docs/article-ideas.md) bevat 78 oorspronkelijke vragen bij 49 artikeldoelen; hun primaire toewijzingen zijn behouden. Er zijn 35 oorspronkelijke vragen beantwoord en 43 gepland of gedeeltelijk. EWI-07, GW-10 en HV-04 zijn deze batch nieuw afgerond. De vier apart geregistreerde aanvullende toeslagvragen zijn nu alle vier afgerond (4/4), inclusief TOES-04. De categorie- en subcategorie-ID's en ankers zijn behouden. Deze redactionele registratie staat uitsluitend in documentatie; ongepubliceerde doelen krijgen geen placeholderlinks.

Het [contentplan](docs/content-plan.md) beschrijft de hiërarchie en onderwerpen per categorie, met onderscheid tussen bestaande artikelen en geplande inhoud. De afvalpas is onder Huishouden en veiligheid ingedeeld; de bestaande categorie- en subcategorie-ID's zijn behouden. De [broncontrole](docs/source-review.md) legt vast welke feiten zijn gecontroleerd en wat buiten de artikelen valt. Bronverwijzingen alleen zijn geen bewijs van inhoudelijke controle. Onvolledig gecontroleerde artikelen houden `draft: true` en `reviewedAt: null`; hun routes blijven rechtstreeks bereikbaar met conceptmelding en `noindex`, maar categorieoverzichten tonen alleen `draft: false`. Nieuwe artikelen vragen een nieuwe statische build.

## Ontwikkelen

Gebruik npm en behoud `package-lock.json`. De bestaande installatie gebruikt Next.js App Router, strict TypeScript, Mantine, CSS Modules, gray-matter, react-markdown en remark-gfm.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run test:search
npm run build
```

De ontwikkelserver draait standaard op http://localhost:3000. Draai lint, typecheck en build afzonderlijk; `next build` vervangt de lintcontrole niet. `typecheck` gebruikt `tsc --noEmit`.

Toont een net toegevoegd of hernoemd Markdown-artikel lokaal nog een 404? Herstart `npm run dev` om de artikelbestanden en statische routeparameters opnieuw te laten inlezen. De productie-export wordt altijd opnieuw opgebouwd met `npm run build`.

`npm run build` maakt een volledige statische export in `out/`. Publiceer die map bij een statische host. Dankzij `trailingSlash: true` krijgen artikelen een eigen map met `index.html`. Configureer de host om `404.html` te gebruiken voor ontbrekende bestanden. `next start` is niet geschikt voor deze export; voor een lokale exportpreview kun je met een geïnstalleerde Python bijvoorbeeld `python -m http.server 3000 --directory out` gebruiken. De build gebruikt systeemlettertypen en haalt geen fonts of artikelen van internet op. Opnieuw bouwen is nodig na inhoudswijzigingen.

## Een artikel toevoegen

Begin bij één concrete lezersvraag. Houd onafhankelijke vragen zelfstandig vindbaar; voeg ze niet automatisch samen omdat een gids hetzelfde onderwerp heeft. Behoud inventaris-ID's en registreer nieuwe vraag-URL's naast hun historische gidsbestemming in het contentplan. Langere gidsen blijven optionele verdere uitleg.

1. Maak `content/articles/duidelijke-naam.md`. De bestandsnaam zonder `.md` bepaalt de slug; gebruik alleen kleine letters, cijfers en enkele koppeltekens. De URL wordt `/onderwerpen/duidelijke-naam/`. Gebruik geen aparte `slug` in de frontmatter.
2. Voeg YAML-frontmatter toe met alle onderstaande velden. Kies `category` en een bijbehorende `subcategory` uit `src/lib/categories.ts`.
3. Schrijf de Nederlandstalige Markdown onder de afsluitende `---`. De template toont titel, beschrijving, conceptmelding, controledatum en bronnen; begin de inhoud met tekst en gebruik `##` voor secties.
4. Gebruik echte, gecontroleerde bron-URL's van gezaghebbende organisaties. Verzin geen juridische termijnen, prijzen of controledatums. Vul `reviewedAt` pas in na een echte inhoudelijke controle. Zet `draft` pas na redactionele beoordeling op `false`.
5. Draai lint, typecheck en build en controleer de pagina en de teruglink naar de subcategorie. Artikellijsten en artikelroutes worden automatisch uit de bestanden afgeleid; categoriepagina's uit de centrale categoriedefinitie.

```yaml
---
title: Je huurcontract lezen
description: Leer waar je de afspraken over je woning vindt.
category: woning-en-huurcontract
subcategory: huurafspraken
sources:
  - title: "Rijksoverheid — Woning huren"
    url: https://www.rijksoverheid.nl/themas/bouwen-en-wonen/woning-huren
reviewedAt: null
draft: true
---
```

`title` en `description` zijn niet-lege teksten. `category` is een van de onderstaande ids. `subcategory` is verplicht en moet binnen die categorie bestaan; ontbrekende, onbekende of verkeerd gecombineerde verwijzingen stoppen de build. `sources` bevat minstens één object met een niet-lege `title` en geldige http(s)-`url`. `reviewedAt` is verplicht en is `null` (ook leeg YAML wordt null) of een bestaande kalenderdatum als geciteerde tekst `"JJJJ-MM-DD"`. Een ongeciteerde YAML-datum wordt afgewezen. `draft` is een verplichte boolean. Lege inhoud, ongeldige slugs en ongeldige metadata stoppen de build met de bestandsnaam in de foutmelding. URL-validatie controleert het formaat; beschikbaarheid en gezag van de bron blijven redactionele controles.

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

### Korte vragen en zoeken

- Een bestaande Markdown zonder `kind` blijft een gids. Voor een kort antwoord gebruik je `kind: question`, bijvoorbeeld `keywords: [borg, waarborgsom]` en optioneel `guides: [je-huurcontract-lezen]`. De bestaande verplichte metadatavelden blijven gelden. Een gepubliceerde vraag moet een controledatum hebben; eventuele gidsverwijzingen moeten naar bestaande, gepubliceerde gidsen wijzen. Een vraag hoeft geen overkoepelende gids te hebben. `keywords` en `guides` zijn optionele lijsten van niet-lege teksten, gidsverwijzingen zijn geldige slugs.
- Schrijf het volledige korte antwoord in de Markdown-body, meestal een paar zinnen, met noodzakelijke voorwaarden en uitzonderingen. Voeg niet daarnaast een handmatig gekopieerd antwoordveld of homepagebestand toe. De gids- en bronlinks worden vanuit de metadata getoond.
- `src/lib/search-index.ts` maakt tijdens de statische homepagebuild een compacte index: titel, URL, categorie, beschrijving en zoekwoorden; voor vragen ook hun canonieke antwoord, controledatum, bronnen en gidslinks. Gidsen leveren alleen metadata. Concepten en redactionele documenten ontbreken.
- De index wordt als serialiseerbare data in de statische homepage opgenomen; er is geen runtime zoekendpoint of server nodig. De browser zoekt lokaal in `src/lib/search.ts`, zonder verzending of opslag van zoekopdrachten. Links uit resultaten laden niet preventief alle volledige gidsen.
- Zoeken negeert hoofdletters, accenten en gangbare Nederlandse vraagwoorden. Een kleine woordenlijst ondersteunt onder meer waarborgsom/borg, milieupas/afvalpas, elektra/stroom en onderlaag/ondervloer. Alle overige zoekwoorden moeten matchen in vraag, antwoord, trefwoorden of gidsmetadata; vragen komen vóór gidsen. Het is geen algemene spellingscorrectie of semantische zoekmachine.
- De homepage toont bij een lege zoekvraag acht korte vragen met native `details/summary`. Bij een zoekopdracht zijn antwoorden direct geopend. Enter brengt de toetsenbordfocus naar de resultatenkop; een rustige live-regio meldt aantallen. Zonder JavaScript blijven de acht uitklappers en categorielinks bruikbaar.
- `npm run test:search` controleert synoniemen, prioritering, lege/mislukte zoekopdrachten, canonieke antwoorden, geldige gidslinks en de afwezigheid van volledige gidsteksten in de index. De test gebruikt de aanwezige TypeScript-installatie en Node; geen nieuwe dependencies.

- `src/lib/articles.ts`: uitsluitend server/build-code, afgeschermd met `server-only`; lezen en valideren van lokale Markdown met gray-matter.
- `src/lib/categories.ts`: enige bron voor categorie-id's, URL-slugs, Nederlandse labels, beschrijvingen en subcategorieën. De bestaande `label`-conventie is behouden. Id's blijven stabiel; de afzonderlijke `slug` bepaalt de categorie-URL (momenteel gelijk aan het id). De subcategorie-id bepaalt het sectie-anker. Wijzig deze id's niet bij een tekstuele titelwijziging.
- `src/app/categorieen/[slug]/page.tsx`: alle zeven categoriepagina's worden gebouwd via `generateStaticParams`, met `dynamicParams = false`. Alleen gepubliceerde artikelen en gevulde subcategorieën worden getoond. Een lege categorie heeft een lege melding en een teruglink; onbekende slugs krijgen een 404.
- `src/components/breadcrumbs.tsx`: gedeelde broodkruimels voor categorie- en artikelpagina's.
- `src/app/onderwerpen/[slug]/page.tsx`: gedeeld template met react-markdown en remark-gfm, `generateStaticParams` en `dynamicParams = false`. Onbekende slugs krijgen een 404. Ruwe HTML wordt niet uitgevoerd; Markdown-taaklijsten renderen geen checkboxes.
- `src/app/layout.tsx`: Nederlands document, metadata, Mantine-CSS, `MantineProvider`, `ColorSchemeScript` en `mantineHtmlProps` volgens de officiële integratie: https://mantine.dev/guides/next/.
- `postcss.config.cjs`: Mantine-preset en breakpointvariabelen. Custom layouts en artikelopmaak staan in CSS Modules.

Het kleurenschema staat vast op licht in zowel provider als script, zonder keuzeschakelaar. Navigatie heeft zichtbare toetsenbordfocus, een skiplink en broodkruimels. Categoriekaarten bevatten één link zonder geneste links. Artikel-teruglinks gaan naar `/categorieen/[slug]/#subcategorie-id`; als een concept nog geen gepubliceerde subcategoriegroep heeft, gaat de teruglink naar de categorie zonder anker. De artikel-URL's blijven gelijk. Gegenereerde mappen (`.next/`, `out/`, `build/`) en TypeScript-buildinformatie worden door Git genegeerd.

Lees voor Next.js-wijzigingen de documentatie van de geïnstalleerde versie onder `node_modules/next/dist/docs/`, zoals vastgelegd in `AGENTS.md`. Behoud de door Next.js gegenereerde instructies in dat bestand.
