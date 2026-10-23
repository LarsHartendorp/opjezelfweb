# Contentplan en redactionele backlog

Voor mensen die een woning hebben geaccepteerd en zich voorbereiden op zelfstandig wonen. Kamerhuur en zelfstandige huur krijgen aandacht waar ze verschillen. Dit plan verwerkt alle **78 unieke input-ID's** uit [de oorspronkelijke inventaris](article-ideas.md), verdeeld over **49 artikeldoelen**. De oorspronkelijke vragen blijven daar letterlijk bewaard; hieronder krijgt ieder ID precies één primaire bestemming. Samengevoegde vragen staan op dezelfde rij.

De enige technische categoriebron blijft `src/lib/categories.ts`. Elke sectiekop hieronder is het bestaande categorie-id (tevens huidige URL-slug); iedere rij noemt een bestaand subcategorie-id, ook het stabiele retouranker. Slugs in deze backlog zijn redactionele doelen, geen klikbare placeholders. Alleen aanwezige gepubliceerde Markdown verschijnt op de website.

## Betekenis van de registratie

- **Afgerond:** de gepubliceerde tekst beantwoordt de genoemde inputvragen daadwerkelijk. Het betekent geen uitputtende behandeling van alle uitzonderingen.
- **Gedeeltelijk:** het bestaande artikel noemt het onderwerp, maar het concrete gat staat in de laatste kolom. Dit telt niet als afgerond. Bij gemengde status worden de ID's afzonderlijk genoemd.
- **Gepland:** nog te onderzoeken en te schrijven; geen conceptpagina aangemaakt. De laatste kolom noemt de redactionele onderzoeksvraag of blokkade. Zonder afgeronde broncontrole geen publicatie.
- **Bestaand / nieuw / samengevoegd:** relatie tot de zeven oorspronkelijke artikelen en het vorige contentplan. Samengevoegd betekent één coherent artikeldoel voor meerdere inputvragen.
- **P1:** eerstvolgende basisinformatie of veiligheid; **P2:** verdieping; **P3:** later praktisch detail. Binnen P1 zijn de batchkeuzes hieronder expliciet vastgelegd.

## Eerste batch en dekkingsbesluit

De eerste gevraagde afvalpasvraag was al volledig beantwoord: het artikel behandelt de eigen gemeente, overdracht, aanvragen, gedeelde bewoning en een ontbrekende pas. Die vraag gebruikt geen nieuw artikelslot. De sociale-huurvraag had alleen een algemeen budgetartikel; dat is uitgebreid onder dezelfde URL. Huurdersrechten en verantwoordelijkheden vormen samen één artikel, met onderhoud, kleine aanpassingen en een hulpaanpak.

De twee vrijgekomen slots gaan naar de volgende oorspronkelijke prioriteiten: vloerkeuze en ondervloer. Het vorige plan hield deze bewust apart en dat blijft zo: het ene artikel helpt een vloeropbouw kiezen voor verwarming, het andere bepaalt of een losse laag nodig of toegestaan is. Ze verwijzen naar elkaar. Er zijn dus vier bewerkte artikelen: één bestaand uitgebreid en drie nieuwe gepubliceerd.

Vóór deze batch is de daadwerkelijke tekst van alle zeven artikelen gelezen. Toen waren 12 inputvragen afgerond: energiecontract, afvalpas, borg, de drie kostentermen, startuitgaven, digitale adresvoorbereiding, leverancier/netbeheerder, energievoorschot/afrekening, inboedel/opstal, polisbegrippen, verzekering bij huisgenoten en verhuisafspraken. Zie de exacte ID-statussen in de tabellen. Alleen een vermelding van foto's, lokale belastingen, ouderverzekering of een tas voor de eerste dag is niet als volledig antwoord geteld. Ook de volledige vraag welke verhuisstanden je vastlegt blijft open: het energieartikel is geen overzicht van stroom, gas, water en eventuele warmtemeters.

Na deze batch staan **21 inputvragen op afgerond**: de bestaande 12 en 9 aanvullend beantwoord. Er zijn tien gepubliceerde artikelen, geen Markdown-concepten. De overige 57 vragen blijven gepland of gedeeltelijk; zij worden niet als bezochte of voltooide onderwerpen aan bezoekers getoond.

## Tweede batch en uitbreiding toeslagen

Deze batch voegt de vier reeds geplande artikelen toe, na vergelijking met de bestaande teksten over huurcontract, verhuisdag, rechten/plichten, energie en woonlasten. Die bestaande pagina's zijn geen volledige sleuteloverdracht-, heffingen-, aanvraag- of installatiegids en blijven onder hun bestaande URL's behouden.

**Actuele stand oorspronkelijke inventaris:** alle 78 ID's behouden dezelfde primaire slugtoewijzing. De 49 oorspronkelijke artikeldoelen blijven bestaan. Deze batch rondt 10 extra oorspronkelijke vragen af: WH-02, WH-03; GW-02, GW-03, GW-04, GW-05; EWI-01, EWI-02, EWI-06, HV-01. Totaal **31 van 78 afgerond**, **47 gepland of gedeeltelijk**. Er zijn nu 14 gepubliceerde artikelen en geen Markdown-concepten. De eerste batch hierboven is historische verantwoording en is niet opnieuw uitgevoerd.

**Actuele stand aanvullende vragen:** vier nieuwe vragen, TOES-01 t/m TOES-04, bij vier aanvullende artikeldoelen. **0 van 4 afgerond**. De nieuwe huurtoeslaggids geeft basisuitleg over inkomen, bewoners en afrekening, maar is geen volledige gids voor die bredere toeslagvragen. Deze voortgang telt niet mee in de oorspronkelijke 78.

### Toeslagvragen koppelen zonder dubbelingen

De bestaande subcategorie `toeslagen` onder `geld-en-woonlasten` heet voortaan **Toeslagen**. Het ID en het anker blijven gelijk; er ontstaat geen nieuwe route of technische categoriebron. De enige technische definitie blijft `src/lib/categories.ts`. Totaal met de aanvullingen: 53 artikeldoelen.

| Gevraagd onderwerp | Bestaande of nieuwe registratie | Afbakening |
| --- | --- | --- |
| Huurtoeslag controleren en aanvragen | GW-05, bestaande doelslug | Aanvragen en de officiële proefberekening horen bij dezelfde lezersvraag. |
| Zorgtoeslag controleren en aanvragen | TOES-01, nieuw | Andere bijdrage en eigen verzekeringsvoorwaarden; valt niet onder huurtoeslag. |
| Toetsingsinkomen begrijpen en jaarlijks schatten | TOES-02, nieuw | Algemene toeslagbasis; geen kopie van energievoorschotten of het woonbudget. |
| Toeslagpartners en meetellende huishoudleden begrijpen | TOES-03, nieuw | Wie meetelt en vanaf wanneer; onderscheid partner en medebewoner. De wijziging daadwerkelijk melden hoort bij GW-06. |
| Verhuizen, samenwonen of ander inkomen doorgeven | GW-06, bestaande doelslug | Geen nieuw ID. AA-09 blijft het bredere onderwerp samen op één adres wonen; de oorspronkelijke mapping verandert niet. |
| Officiële toeslagenrekenhulp gebruiken | Onderdeel van GW-05; later ook TOES-01 | Geen extra ID of los dubbel rekenhulpartikel. Huurtoeslaggids behandelt jaar, gegevens, beperkingen en onderscheid berekening/aanvraag. |
| Voorschotten, definitieve berekening en terugbetalen | TOES-04, nieuw | Toeslagbeschikkingen; EWI-04 blijft uitsluitend energievoorschotten en jaarafrekening. |

### Aanvullend register — Geld en woonlasten / Toeslagen

Dit is een afzonderlijk register naast de oorspronkelijke 78. Nieuwe ID's staan ook in de aanvulling van `article-ideas.md`. De exacte subcategorie is voor alle vier `toeslagen`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `toeslagen` | `zorgtoeslag-controleren-en-aanvragen` — Zorgtoeslag controleren en aanvragen | Hoe controleer en vraag ik zorgtoeslag aan? | TOES-01 | Aanvullend, nieuw | P1 / volgende batch | Gepland | Eigen voorwaarden, Nederlandse zorgverzekering, uitzonderingen, jaar, calculator en aanvraag verifiëren; geen gepubliceerd artikel. |
| `toeslagen` | `je-toetsingsinkomen-schatten` — Je toetsingsinkomen schatten | Welk jaarinkomen telt mee en hoe maak ik een schatting? | TOES-02 | Aanvullend, nieuw | P1 / volgende batch | Gepland; gedeeltelijke bestaande uitleg | Huurtoeslaggids definieert het begrip en verwijst naar de hulp. Volledige uitleg inkomensbestanddelen, wisselend werk en jaarovergang nog onderzoeken. |
| `toeslagen` | `toeslagpartner-en-medebewoners-begrijpen` — Toeslagpartner en medebewoners begrijpen | Wie telt mee voor mijn toeslag en wanneer verandert dat? | TOES-03 | Aanvullend, nieuw | P1 / volgende batch | Gepland; gedeeltelijke bestaande uitleg | Basisbegrippen staan in huurtoeslag. Partnercriteria, uitzonderingen, ingangsdatums en verschillen tussen toeslagen nog uitwerken; verwijs voor meldstappen naar GW-06. |
| `toeslagen` | `voorschot-definitieve-berekening-en-terugbetalen` — Je toeslagberekening en terugbetalen begrijpen | Hoe verschillen voorschot en definitieve berekening en wat doe ik bij terugbetalen? | TOES-04 | Aanvullend, nieuw | P1 | Gepland; gedeeltelijke bestaande uitleg | Huurtoeslaggids geeft basis en bronroute. Vergelijking beschikkingen, te veel/te weinig, correctie en betalingsmogelijkheden voor meerdere toeslagen nog controleren. |

## Woning en huurcontract

Categorie-id en URL-slug: `woning-en-huurcontract`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `huurafspraken` | `je-huurcontract-lezen` — Je huurcontract lezen | Waar staan mijn huurafspraken en waarom betaal ik borg? | WH-04 | Bestaand | P1 | Afgerond | Borg en betalingsbewijs uitgelegd; overige contractuitleg behouden. |
| `huurafspraken` | `je-rechten-en-plichten-als-huurder` — Je rechten en plichten als huurder | Wat mag ik verwachten en wat moet ik zelf doen? | USER-06, USER-07, WH-06, WH-07, WH-10 | Nieuw, samengevoegd | P1 / batch 1 | Afgerond | Voorheen slechts genoemd in contractartikel; nu rechten, onderhoud, aanpassingen en hulproute uitgewerkt. Geen individuele contractbeoordeling. |
| `sleutel-en-onderhoud` | `de-sleuteloverdracht-en-de-staat-van-je-woning` — De sleuteloverdracht en de staat van je woning | Wat controleer en documenteer ik bij ontvangst? | WH-02, WH-03 | Nieuw, samengevoegd | P1 / batch 2 | Afgerond | Rondgang, sleutels, kamer/gedeelde ruimtes, beschrijving met foto's, rapport controleren, onenigheid en herstelafspraken uitgewerkt. |
| `huurafspraken` | `huisregels-in-een-appartement` — Huisregels in een appartement begrijpen | Waar vind ik de regels voor mijn complex en wat betekenen ze? | WH-08 | Gepland | P2 | Gepland; gedeeltelijke bestaande uitleg | Rechtenartikel leert regels opvragen, maar behandelt niet de verhouding tussen huurcontract, beheerder en VvE-regels. |
| `huurafspraken` | `het-energielabel-van-je-woning` — Het energielabel van je woning begrijpen | Wat vertelt het label wel en niet over mijn woning? | WH-09 | Gepland | P2 | Gepland | Officiële labelgegevens, betekenis en grenzen voor werkelijke energiekosten onderzoeken. |

## Geld en woonlasten

Categorie-id en URL-slug: `geld-en-woonlasten`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `woonkosten` | `je-woonlasten-op-een-rij` — Je woonlasten op een rij | Welke kosten en reserves horen bij sociale huur of een kamer? | USER-03, WH-01, GW-01, GW-08, EWI-04 | Bestaand, uitgebreid; samengevoegd | P1 / batch 1 | Afgerond | Sociale-huurfocus ontbrak eerst. Nu ook lokale heffingen als kostenpost, betaalmomenten en onverwachte reserve. Geen vaste normprijzen. |
| `woonkosten` | `lokale-belastingen-en-kwijtschelding` — Lokale belastingen en kwijtschelding onderzoeken | Welke aanslagen krijg ik en hoe onderzoek ik vermindering? | GW-02, GW-03, GW-04 | Nieuw, samengevoegd | P1 / batch 2 | Afgerond | Gemeente- en waterschapsheffingen, huurders/eigenaren, lokale navraag bij kamerhuur en kwijtschelding bij juiste uitvoerder uitgewerkt. Geen landelijke tarieven of toekenning beloofd. |
| `toeslagen` | `huurtoeslag-bij-een-kamer-of-zelfstandige-woning` — Huurtoeslag bij een kamer of zelfstandige woning | Hoe controleer ik of ik huurtoeslag kan aanvragen? | GW-05 | Nieuw | P1 / batch 2 | Afgerond | Voorwaarden, woonvorm, toeslagjaar, officiële proefberekening en aanvraag in Mijn toeslagen uitgewerkt. Geen individueel toeslagrecht vastgesteld; calculator is onderdeel van dit doel, geen dubbel artikel. |
| `toeslagen` | `veranderingen-doorgeven-voor-je-toeslagen` — Veranderingen doorgeven voor je toeslagen | Welke veranderingen geef ik zelf door? | GW-06 | Gepland | P1 / volgende batch | Gepland; gedeeltelijke bestaande uitleg | GW-06 hergebruikt voor verhuizen, samenwonen en inkomenswijziging bij alle relevante toeslagen. Huurtoeslagartikel behandelt adres/huur en verwijst naar inkomen; volledige wijzigingsroutes, samenwonen, stoppen en ingangsdatums ontbreken nog. Geen nieuw ID voor dezelfde wijzigingsvraag. |
| `woonkosten` | `servicekosten-en-voorschotten-begrijpen` — Servicekosten en voorschotten begrijpen | Hoe controleer ik de jaarlijkse afrekening van mijn verhuurder? | GW-07 | Gepland | P2 | Gepland; gedeeltelijke bestaande uitleg | Voorschot en jaarlijkse specificatie staan in woonlasten; rekencontrole, verdeelsleutels en betwisten ontbreken. Onderscheid contracten vóór/vanaf 2027 onderzoeken. |
| `woonkosten` | `als-je-de-huur-of-een-rekening-niet-kunt-betalen` — Als je de huur of een rekening niet kunt betalen | Waar vraag ik tijdig hulp bij betalingsproblemen? | GW-10 | Gepland | P1 | Gepland | Actuele gemeentelijke schuldhulp en contact met schuldeiser onderzoeken; geen algemene incassotermijnen verzinnen. |

## Adres en administratie

Categorie-id en URL-slug: `adres-en-administratie`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `woonadministratie` | `je-adres-doorgeven-en-oude-post-regelen` — Je adres doorgeven en oude post regelen | Wie informeer ik zelf en wat doe ik met post op mijn oude adres? | AA-01, AA-04 | Gepland, samengevoegd | P2 | Gepland; gedeeltelijke bestaande uitleg | Adresartikel noemt verzekeraar en leverancier, geen onderscheid automatische ontvangers of aanpak oude post. |
| `adres-en-gemeente` | `je-nieuwe-adres-doorgeven` — Je nieuwe adres doorgeven aan de gemeente | Wat bereid ik voor en hoe controleer ik de verwerking? | AA-02, AA-03 | Bestaand, uitbreiding gepland | P2 | AA-02 afgerond; AA-03 gedeeltelijk | Digitale voorbereiding, DigiD en lokale documenten uitgelegd. AA-03 mist concrete inzage- en correctiestappen; ontvangst is nog geen verwerking. |
| `woonadministratie` | `je-woonadministratie-overzichtelijk-bewaren` — Je woonadministratie overzichtelijk bewaren | Welke woonpapieren en bevestigingen bewaar ik? | AA-05 | Gepland | P2 | Gepland; gedeeltelijke bestaande uitleg | Artikelen noemen losse documenten; samenhangend bewaarsysteem en veilige opslag ontbreken. Bewaartermijnen alleen met bron. |
| `woonadministratie` | `een-huisarts-en-tandarts-vinden` — Een huisarts en tandarts vinden na je verhuizing | Hoe regel ik zorgverleners en overdracht? | AA-06 | Gepland | P2 | Gepland | Actuele primaire patiënteninformatie en werkwijze bij geen plek onderzoeken. |
| `woonadministratie` | `duo-controleren-als-je-uit-huis-gaat` — DUO controleren als je uit huis gaat | Wat verandert er voor mijn studiefinanciering? | AA-07 | Gepland | P2 | Gepland | Actuele DUO-regels voor uitwonend en bewijs controleren; geen recht op beurs veronderstellen. |
| `adres-en-gemeente` | `een-parkeervergunning-aanvragen` — Een parkeervergunning aanvragen | Hoe vind ik de voorwaarden voor mijn adres? | AA-08 | Gepland | P2 | Gepland | Lokale vergunning, wachtlijst en aanvraagroute onderzoeken; verhuisontheffing is iets anders. |
| `adres-en-gemeente` | `samen-op-een-adres-gaan-wonen` — Samen op een adres gaan wonen | Wat regel ik bij inschrijving en gezamenlijke bewoning? | AA-09 | Gepland | P2 | Gepland | BRP, huurtoestemming en mogelijke toeslaggevolgen onderscheiden en onderzoeken. |
| `adres-en-gemeente` | `een-onjuiste-inschrijving-op-je-adres-melden` — Een onjuiste inschrijving op je adres melden | Wat doe ik als een vorige bewoner nog ingeschreven staat? | AA-10 | Gepland | P2 | Gepland | Gemeentelijk adresonderzoek en bewijsroute controleren; geen eigen uitschrijfbevoegdheid suggereren. |

## Energie, water en internet

Categorie-id en URL-slug: `energie-water-en-internet`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `energiecontracten` | `een-energiecontract-regelen` — Een energiecontract regelen | Wie levert energie en wat regel ik bij een verhuizing? | USER-01, EWI-03 | Bestaand, samengevoegd | P1 | Afgerond | Leverancier/netbeheerder, levering en startdatum daadwerkelijk uitgelegd. Verhuisstanden krijgen hieronder een volledige vervolguitleg. |
| `energiecontracten` | `je-installaties-en-meters-vinden` — Je installaties en meters vinden | Welke meters, beginstanden, verwarming en afsluiters horen bij mijn woning? | EWI-01, EWI-02, EWI-06, HV-01 | Nieuw, samengevoegd | P1 / batch 2 | Afgerond | Vindplaatsen, eigen/gedeelde meters, nummer en registers, stroom/gas/water/warmte, verwarmingsbron versus afgifte, hoofdkraan en groepenkast uitgewerkt. Herkennen en lezen, geen reparatiehandleiding. |
| `energiecontracten` | `warmte-regelen-bij-stadsverwarming` — Warmte regelen bij stadsverwarming | Wie levert mijn warmte en wat moet ik zelf regelen? | EWI-05 | Gepland | P2 | Gepland; gedeeltelijke bestaande uitleg | Energieartikel noemt geen vrije overstap; aanmelding, verhuurderlevering en factuurcontrole niet volledig uitgewerkt. |
| `water-en-internet` | `water-regelen-in-je-nieuwe-woning` — Water regelen in je nieuwe woning | Hoe vind ik mijn waterbedrijf en meld ik mijn verhuizing? | EWI-07 | Gepland | P1 | Gepland | Regionale leverancier, eigen of gedeelde aansluiting en meterstanden onderzoeken. |
| `water-en-internet` | `internet-regelen-voor-je-kamer-of-woning` — Internet regelen voor je kamer of woning | Wanneer vraag ik internet aan en welke snelheid past? | EWI-08, EWI-09 | Gepland, samengevoegd | P2 | Gepland | Beschikbaarheid, gedeeld abonnement, gebruik en leverdatum onderzoeken; geen universele snelheid of termijn. |
| `water-en-internet` | `als-een-aansluiting-bij-verhuizing-niet-werkt` — Als een aansluiting bij verhuizing niet werkt | Wie benader ik als energie, water of internet ontbreekt? | EWI-10 | Gepland | P2 | Gepland | Storingen, ontbrekend contract en installatiefout afzonderlijk behandelen; veilige contactroutes controleren. |

## Verzekeringen

Categorie-id en URL-slug: `verzekeringen`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `spullen-en-schade` | `je-spullen-verzekeren` — Je spullen verzekeren met een inboedelverzekering | Wat is verzekerd en wat controleer ik bij mijn polis? | VE-01, VE-04, VE-05, VE-06 | Bestaand, uitbreiding gepland; samengevoegd | P2 | VE-01, VE-05, VE-06 afgerond; VE-04 gedeeltelijk | Inboedel/opstal, eigen risico, uitsluitingen, grenzen en gedeelde spullen uitgelegd. VE-04 mist waardebepaling en gevolgen van een te laag bedrag; inventaris alleen is onvoldoende. |
| `dekking-bij-verhuizen` | `je-verzekeringen-nalopen-bij-een-verhuizing` — Je verzekeringen nalopen bij een verhuizing | Welke polissen veranderen en hoe voorkom ik dubbel verzekeren? | VE-02, VE-10 | Gepland, samengevoegd | P2 | Gepland; gedeeltelijke bestaande uitleg | Inboedelartikel zegt ouderdekking navragen; concrete poliscontrole per verzekering en dubbele dekking ontbreken. |
| `spullen-en-schade` | `aansprakelijkheid-en-schade-aan-een-ander` — Schade aan iemand anders: aansprakelijkheid begrijpen | Wat doet een aansprakelijkheidsverzekering? | VE-03 | Gepland | P2 | Gepland | Wettelijke aansprakelijkheid en polisdekking uit elkaar houden; eigen productvoorwaarden als voorbeeld controleren. |
| `dekking-bij-verhuizen` | `schade-tijdens-het-verhuizen` — Schade tijdens het verhuizen | Bij wie meld ik schade tijdens vervoer of opslag? | VE-07 | Gepland | P2 | Gepland; gedeeltelijke bestaande uitleg | Verhuis- en inboedelartikelen adviseren voorwaarden na te vragen; dekking en aansprakelijkheid per vervoerssituatie nog onderzoeken. |
| `spullen-en-schade` | `schade-melden-en-bewijs-bewaren` — Schade melden en bewijs bewaren | Hoe bereid ik een schadeclaim voor en dien ik die in? | VE-08, VE-09 | Gepland, samengevoegd | P2 | Gepland | Bewijs, schadebeperking en meldroute bij verzekeraar onderzoeken; geen vaste polisdeadline bedenken. |

## Verhuizen en inrichten

Categorie-id en URL-slug: `verhuizen-en-inrichten`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `verhuizen-en-overnemen` | `spullen-overnemen-van-de-vorige-bewoner` — Spullen overnemen van de vorige bewoner | Welke overnameafspraken leg ik vast? | WH-05 | Gepland | P2 | Gepland | Eigendom, betaling, onderhoud en toestemming verhuurder onderzoeken; bestaande verhuisdag behandelt dit niet. |
| `verhuizen-en-overnemen` | `je-verhuisdag-voorbereiden` — Je verhuisdag voorbereiden | Welke afspraken maak ik met helpers of een verhuizer? | VI-09 | Bestaand | P2 | Afgerond | Taken, ritten, aanwezigheid, offerte, werkzaamheden, schadevoorwaarden en schriftelijke afspraken beschreven. Geen garantie van transportschadedekking. |
| `inrichting-en-vloeren` | `je-eerste-inrichting-plannen` — Je eerste inrichting plannen | Wat heb ik eerst nodig en in welke volgorde richt ik in? | VI-01, VI-04, VI-05 | Gepland, samengevoegd | P2 | Gepland; gedeeltelijke bestaande uitleg | Verhuisdag noemt eerste-dagtas en slapen/eten; concrete basisinrichting, klusvolgorde en gereedschap ontbreken. Behoud van het eerdere inrichtingsidee. |
| `inrichting-en-vloeren` | `meubels-en-de-route-opmeten` — Meubels en de route naar binnen opmeten | Welke maten bepalen of mijn meubels passen? | VI-02, VI-03 | Gepland, samengevoegd | P2 | Gepland; gedeeltelijke bestaande uitleg | Verhuisdag noemt meten, maar mist ruimteplan, verpakkingsmaten, bochten en lifttoegang. |
| `inrichting-en-vloeren` | `tweedehands-meubels-en-apparaten-kiezen` — Tweedehands meubels en apparaten kiezen | Wat controleer ik vóór een tweedehands aankoop? | VI-06 | Gepland | P3 | Gepland | Staat, veiligheid, productinformatie en verschil particulier/bedrijf onderzoeken. |
| `verhuizen-en-overnemen` | `leveringen-op-je-nieuwe-adres-plannen` — Leveringen op je nieuwe adres plannen | Hoe stem ik levering af als ik er nog niet woon? | VI-07 | Gepland | P2 | Gepland | Toegang, ontvangst en aanbiederafspraken onderzoeken; geen algemeen recht op afzetplek suggereren. |
| `verhuizen-en-overnemen` | `een-koelkast-of-wasmachine-vervoeren` — Een koelkast of wasmachine vervoeren | Wat vraagt mijn apparaat vóór en na vervoer? | VI-08 | Gepland | P2 | Gepland | Fabrikantvoorschriften per model controleren; geen universele wachttijd, kantelhoek of transportboutregel. |
| `inrichting-en-vloeren` | `ramen-opmeten-voor-raamdecoratie` — Ramen opmeten voor raamdecoratie | Hoe meet ik voor het gekozen gordijn of systeem? | VI-10 | Gepland | P3 | Gepland | Montageplek en productspecifieke meetinstructies onderzoeken. |
| `inrichting-en-vloeren` | `een-vloer-kiezen-voor-vloerverwarming` — Een vloer kiezen voor vloerverwarming | Welke vloeropbouw past bij mijn verwarming en huurwoning? | USER-04 | Nieuw | P1 / batch 1 | Afgerond | Materiaalkeuze, warmteweerstand en navraag exacte installatie uitgewerkt; geen universele productgrens of merkadvies. |
| `inrichting-en-vloeren` | `wanneer-heb-je-een-ondervloer-nodig` — Wanneer heb je een ondervloer nodig? | Wanneer is een losse onderlaag nodig of juist ongeschikt? | USER-05 | Nieuw | P1 / batch 1 | Afgerond | Eigen beslisvraag: ondergrond, legwijze, geïntegreerde laag, geluid en warmte. Verwijst naar vloerkeuze; geen tweede materiaalvergelijking. |
| `inrichting-en-vloeren` | `een-wasmachine-plaatsen-en-aansluiten` — Een wasmachine plaatsen en aansluiten | Zijn plek, aansluiting, afvoer en instructies geschikt? | EXAMPLE-01 | Gepland | P2 | Gepland | Exacte fabrikantinstallatie, veilige water-/stroomaansluiting en verhuurderafspraken controleren. Vervoer blijft bij het aparte transportartikel. |

## Huishouden en veiligheid

Categorie-id en URL-slug: `huishouden-en-veiligheid`.

| Subcategorie / anker | Doelslug en titel | Hoofdvraag | Input-ID's | Relatie | Prioriteit | Redactionele status | Dekking, gat of blokkade |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `samen-wonen` | `samen-een-huishouden-delen` — Samen een huishouden delen | Hoe spreken we gedeelde kosten, schoonmaak, bezoek en geluid af? | GW-09, HV-10 | Gepland, samengevoegd | P2 | Gepland | Gezamenlijke betalingen en praktische huisafspraken combineren; juridische aansprakelijkheid niet zonder bron afleiden. |
| `veilig-en-gezond` | `een-afvalpas-aanvragen` — Een afvalpas aanvragen bij de gemeente | Hoe regel ik een afvalpas voor mijn adres? | USER-02 | Bestaand | P1 | Afgerond | Eigen gemeente vinden, bestaande pas, aanvraag, gedeelde bewoning en storing daadwerkelijk beantwoord. Geen batchslot gebruikt. |
| `veilig-en-gezond` | `wat-te-doen-bij-een-lekkage` — Wat te doen bij een lekkage | Hoe beperk ik veilig schade en wie bel ik? | HV-02 | Gepland | P1 | Gepland | Waterbedrijf, verhuurder en verzekeraar als primaire routes onderzoeken; spoed en onveiligheid onderscheiden. |
| `veilig-en-gezond` | `stroomstoring-in-huis` — Een stroomstoring in huis herkennen | Wat kan ik veilig controleren en wie helpt? | HV-03 | Gepland | P1 | Gepland | Netbeheerderinstructies en grens tussen wijkstoring en woninginstallatie controleren; geen riskante reparatieadviezen. |
| `veilig-en-gezond` | `brandveilig-wonen-in-een-kamer-of-huurwoning` — Brandveilig wonen in een kamer of huurwoning | Welke melders en vluchtvoorbereiding passen bij mijn woning? | HV-04 | Gepland | P1 | Gepland; gedeeltelijke bestaande uitleg | Verhuisdag behandelt vrije vluchtroute. Rook-/CO-melders, verantwoordelijkheid en plaatsingsinstructies ontbreken; oorspronkelijke brandveiligheidsscope behouden. |
| `veilig-en-gezond` | `ventileren-en-vocht-herkennen` — Ventileren en vocht herkennen | Hoe ventileer ik en herken ik vocht of schimmel? | HV-05, HV-06 | Gepland, samengevoegd | P1 | Gepland | Ventilatiesysteem, warmteverlies en herkenning onderzoeken; gezondheid en bouwgebrek niet zelf diagnosticeren. |
| `veilig-en-gezond` | `afval-scheiden-en-verhuisafval-afvoeren` — Afval scheiden en verhuisafval afvoeren | Wat mag waar en hoe regel ik grofvuil? | HV-07, HV-08 | Gepland, samengevoegd | P2 | Gepland | Afvalpas is alleen toegangsuitleg. Lokale afvalwijzer, brengpunt en ophaalregels nog onderzoeken. |
| `samen-wonen` | `een-haalbare-schoonmaakroutine` — Een haalbare schoonmaakroutine maken | Hoe houd ik mijn woning met een werkbare routine schoon? | HV-09 | Gepland | P3 | Gepland | Praktische routine onderscheiden van product- en hygiëne-instructies; verwijs voor taakverdeling naar samen wonen. |

## Behoud van eerdere plannen buiten de inventaris

Geen eerder onderwerp is geschrapt omdat het geen exact input-ID had. Het contractartikel blijft het algemene startpunt, ook buiten de borgvraag. Het artikel over gemeentelijke verhuismelding behoudt zijn landelijke meldtermijn en lokale verschillen. De geplande brede woonadministratie omvat behalve documenten ook overzicht en veilige opslag. De geplande internetgids blijft óók behandelen of internet via de verhuurder loopt. De eerste inrichting omvat méér dan de eerste nacht. Brandveilig wonen behoudt naast melders de vluchtvoorbereiding. De oude plannen voor water, toeslagen, servicekosten, aansprakelijkheid, verzekeringen nalopen, overname, ventilatie en samen wonen staan hierboven onder hun bestaande onderwerp of een herkenbare samenvoeging. Onderhoud is, zoals eerder gepland, ondergebracht bij rechten en plichten.

## Publicatie en onderhoud

Ieder artikel heeft één primaire categorie en één bijbehorende subcategorie. Concepten blijven `draft: true` en `reviewedAt: null` zolang verificatie ontbreekt. Hun directe route heeft een conceptmelding en noindex; categoriepagina's tonen alleen `draft: false`. De backlog bevat geen brongecontroleerd advies. Redactionele status in dit document verandert de technische publicatieregels niet.

Controleer primaire pagina's zelf, inclusief ingangsdatums en uitzonderingen. Scheid wettelijke plichten, huur- en polisvoorwaarden, lokale procedures, productinstructies en praktische suggesties. Vul de controledatum pas na inhoudelijke controle in. Noteer resterende claims bij de broncontrole en verklaar een ID pas afgerond na vergelijking met de gepubliceerde tekst. Zie [broncontrole en batchverantwoording](source-review.md).

## Volgende aanbevolen batch

Volgende vier doelen: zorgtoeslag controleren en aanvragen (TOES-01), je toetsingsinkomen schatten (TOES-02), toeslagpartners en medebewoners (TOES-03), en veranderingen doorgeven voor je toeslagen (GW-06). Zo ontstaat eerst een samenhangende toeslagbasis. Daarna de definitieve toeslagberekening/terugbetalen (TOES-04), wateraanmelding, betalingsproblemen, brandveiligheid en ventilatie. Tel nieuwe TOES-vragen steeds apart van de oorspronkelijke 78. De tabelprioriteiten blijven redactionele keuzes, geen bezoekersfunctionaliteit.
