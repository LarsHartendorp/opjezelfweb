<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Product en redactie — Op Jezelf

- De ingang is een concrete lezersvraag met een kort, zelfstandig antwoord. Houd onafhankelijke vragen zelfstandig vindbaar, ook als een bestaande gids ze behandelt. Voeg ze niet automatisch samen tot één parapluartikel.
- Gebruik dezelfde Markdowncollectie en loader. Een vraag gebruikt `kind: question`, zoekwoorden in `keywords` en eventuele gids-slugs in `guides`; zonder kind blijft bestaande inhoud een gids. Een gids is geen vereiste voor een zelfstandig antwoord. De Markdown-body is de enige handmatig beheerde antwoordtekst voor vraagpagina, homepage en zoekresultaat.
- Behoud alle bestaande URL's, categorie-ID's en ankers. Houd originele inventaris-ID's en hun historische gidsmappings traceerbaar in docs/content-plan.md; registreer nieuwe vraagbestemmingen daarnaast met hun eigen afbakening. Een kort deelantwoord rondt een bredere inventarisvraag niet automatisch af.
- Onderzoek nieuwe of herschreven antwoorden aan actuele primaire bronnen. Behoud noodzakelijke voorwaarden, uitzonderingen en jaar-/product-/gemeenteverschillen. Publiceer pas na controle met de echte reviewedAt-datum. Concepten blijven buiten overzichten en zoekindex.
- Bouw zoeken lokaal met een compacte index van gepubliceerde vragen, antwoorden en gidsmetadata. Houd filesystemtoegang op de server en volledige gidsteksten buiten de browserzoekindex. Geen backend, accounts, database of bezoekersvoortgang toevoegen.
- Controleer lint, typecheck en productiebuild afzonderlijk, plus zoekgedrag, toetsenbordgebruik, uitklappers en oude/nieuwe routes. Documenteer daadwerkelijke bron- en UI-controle in docs/source-review.md.
