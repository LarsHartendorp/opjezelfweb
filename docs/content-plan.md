# Contentplan en categoriehiërarchie

Voor mensen die een woning hebben geaccepteerd en zich voorbereiden op zelfstandig wonen. Bespreek kamerhuur en zelfstandige huurwoningen waar dat verschil maakt. De homepage verwijst naar zeven categoriepagina's. Alleen bestaande, gepubliceerde artikelen verschijnen daar onder een subcategorie.

De enige technische definitie staat in `src/lib/categories.ts`: een stabiel categorie-id, een afzonderlijke URL-slug, een Nederlands label, een beschrijving en subcategorieën. Onderstaande indeling documenteert die definitie; ze is geen tweede databron voor de website. Subcategorie-id's zijn stabiele ankers binnen `/categorieen/[slug]/#subcategorie-id`, zonder eigen routes.

**Bestaand** betekent dat het Markdown-artikel al beschikbaar is. **Gepland** betekent een redactioneel voorstel, zonder nieuwe pagina of placeholderlink. Een geplande uitbreiding van een bestaand artikel maakt geen tweede artikel aan.

## Woning en huurcontract

Categorie-id en URL-slug: `woning-en-huurcontract`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Huurafspraken en je rechten (`huurafspraken`) | Wat staat er in mijn contract en wat betekent dat voor mijn kamer of woning? | **Je huurcontract lezen — bestaand** |
| Sleuteloverdracht en onderhoud (`sleutel-en-onderhoud`) | Hoe leg ik vast in welke staat ik de kamer of woning krijg? | De sleuteloverdracht en de staat van je woning — gepland |
| Huurafspraken en je rechten (`huurafspraken`) | Welke rechten en plichten heb ik als huurder, en wie moet onderhoud uitvoeren? | Je rechten en plichten als huurder — gepland; hierin de eerder geplande uitleg over onderhoud opnemen. Het bestaande contractartikel blijft het startpunt voor contractafspraken. |

## Geld en woonlasten

Categorie-id en URL-slug: `geld-en-woonlasten`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Huur en andere woonkosten (`woonkosten`) | Welke maandelijkse kosten en startkosten horen bij een kamer of huurwoning, ook een sociale huurwoning? | **Je woonlasten op een rij — bestaand**; een gerichte toelichting op kosten bij sociale huur is een geplande uitbreiding van dit artikel, geen tweede kostenoverzicht. |
| Huurtoeslag (`toeslagen`) | Kan ik voor mijn woonruimte huurtoeslag krijgen en waar controleer ik de voorwaarden? | Huurtoeslag bij een kamer of zelfstandige woning — gepland |
| Huur en andere woonkosten (`woonkosten`) | Wat betekenen de extra bedragen en afrekeningen van mijn verhuurder? | Servicekosten en voorschotten begrijpen — gepland |

## Adres en administratie

Categorie-id en URL-slug: `adres-en-administratie`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Je adres en de gemeente (`adres-en-gemeente`) | Hoe meld ik mijn nieuwe adres bij de gemeente en welke andere organisaties informeer ik zelf? | Je nieuwe adres doorgeven — gepland; combineert de eerdere plannen over gemeente en andere organisaties. |
| Je adres en de gemeente (`adres-en-gemeente`) | Heb ik een afvalpas nodig voor de gemeentelijke container en hoe vraag ik die aan of neem ik die over? | Een afvalpas aanvragen bij de gemeente — gepland; controleer per gemeente de aanvraag, kosten en afspraken met de verhuurder, zonder landelijke regel te veronderstellen. |
| Je woonadministratie (`woonadministratie`) | Welke woonpapieren wil ik later terug kunnen vinden? | Je woonadministratie overzichtelijk bewaren — gepland |

## Energie, water en internet

Categorie-id en URL-slug: `energie-water-en-internet`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Stroom, gas en warmte (`energiecontracten`) | Moet ik zelf stroom of gas regelen en hoe kies ik een passend contract? | **Een energiecontract regelen — bestaand**; hergebruiken voor het onderwerp energiecontract afsluiten. |
| Water en internet (`water-en-internet`) | Loopt water via de verhuurder of moet ik mezelf aanmelden? | Water regelen in je nieuwe woning — gepland |
| Water en internet (`water-en-internet`) | Zit internet bij mijn huur of moet ik zelf een abonnement afsluiten? | Internet regelen voor je kamer of woning — gepland |

## Verzekeringen

Categorie-id en URL-slug: `verzekeringen`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Je spullen en schade (`spullen-en-schade`) | Wat verzekert een inboedelverzekering en past die bij mijn eigen of gedeelde spullen? | Je spullen verzekeren — gepland |
| Je spullen en schade (`spullen-en-schade`) | Wat betekent aansprakelijkheid en welke schade kan een verzekering dekken? | Schade aan iemand anders: aansprakelijkheid begrijpen — gepland |
| Je dekking bij een verhuizing (`dekking-bij-verhuizen`) | Welke dekking verandert als ik uit huis ga en wat vraag ik aan mijn verzekeraar? | Je verzekeringen nalopen bij een verhuizing — gepland |

## Verhuizen en inrichten

Categorie-id en URL-slug: `verhuizen-en-inrichten`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Verhuizen en spullen overnemen (`verhuizen-en-overnemen`) | Wat neem ik mee of over en hoe bereid ik vervoer, toegang en mijn eerste inrichting voor? | Je verhuizing en eerste inrichting voorbereiden — gepland; combineert de eerdere plannen over verhuisdag, eerste spullen en overnameafspraken. |
| Je inrichting en vloeren (`inrichting-en-vloeren`) | Welke vloer past bij de vloerverwarming en bij de voorwaarden van mijn huurwoning? | Een vloer kiezen voor vloerverwarming — gepland; controleer installatievoorschriften, materiaalgegevens en huurvoorwaarden. |
| Je inrichting en vloeren (`inrichting-en-vloeren`) | Wanneer is een ondervloer nodig en hoe verhoudt die zich tot warmte, geluid en de gekozen vloer? | Wanneer heb je een ondervloer nodig? — gepland; een apart antwoord over de laag onder de vloer, zonder het artikel over vloerkeuze te herhalen. |

## Huishouden en veiligheid

Categorie-id en URL-slug: `huishouden-en-veiligheid`.

| Subcategorie (anker-id) | Vraag van de lezer | Artikel en redactionele keuze |
| --- | --- | --- |
| Veilig en gezond wonen (`veilig-en-gezond`) | Wat kan ik doen voor brandveiligheid in mijn nieuwe woonruimte? | Brandveilig wonen in een kamer of huurwoning — gepland |
| Veilig en gezond wonen (`veilig-en-gezond`) | Hoe houd ik mijn woning fris en wat doe ik bij vocht of schimmel? | Ventileren en vocht herkennen — gepland |
| Samen een huishouden delen (`samen-wonen`) | Hoe maak ik werkbare afspraken over gedeelde ruimtes? | Samen een huishouden delen — gepland |

## Redactionele en publicatieafspraken

Beantwoord de hoofdvraag direct. Leg nieuwe begrippen uit bij het eerste gebruik. Maak duidelijk wat een wettelijke regel, een contractafspraak of een praktische suggestie is. Gebruik eigen uitleg met bronlinks bij relevante beweringen en de bestaande bronvelden in de frontmatter.

Ieder artikel krijgt precies één primaire `category` en één `subcategory`. De subcategorie moet bij de categorie horen. Een bestaand onderwerp krijgt geen tweede artikel in een andere categorie; verwijs waar nuttig vanuit de inhoud naar het bestaande artikel. Nieuwe onderwerpen zijn in dit plan voorstellen, geen brongecontroleerde uitspraken.

Categoriepagina's tonen alleen artikelen met `draft: false` en alleen subcategorieën met zulke artikelen. De zeven categoriepagina's bestaan ook als er nog niets gepubliceerd is. Conceptartikelroutes blijven, zoals voorheen, bereikbaar met conceptmelding en `noindex`. Is er voor een concept nog geen gepubliceerde subcategoriegroep, dan verwijst de teruglink naar de categorie zonder ontbrekend anker.

Controleer de actuele primaire bronpagina zelf, inclusief uitzonderingen en ingangsdatums. Zoek bij een onbereikbare pagina een toegankelijke primaire vervanger. Blijft een bewering onopgelost, behoud `draft: true` en `reviewedAt: null` en beschrijf het probleem. Vul de controledatum pas na inhoudelijke controle in.

De drie bestaande artikelteksten, bronnen, controledatums en conceptvlaggen zijn voor deze hiërarchiewijziging behouden. Alleen de subcategorietoewijzing is toegevoegd. Zie [de eerdere broncontrole](source-review.md). De site bewaakt bronnen niet automatisch.
