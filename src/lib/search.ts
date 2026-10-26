export type FurtherReading = { title: string; url: string };
type Entry = {
  title: string;
  url: string;
  description: string;
  category: string;
  keywords: string[];
};
export type SearchEntry =
  | (Entry & { kind: "guide" })
  | (Entry & {
    kind: "question";
    answer: string;
    guides: FurtherReading[];
    sources: FurtherReading[];
    reviewedAt: string;
  });

export function normalize(text: string): string {
  return text.toLocaleLowerCase("nl-NL").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

const alternatives = [
  ["borg", "waarborgsom", "waarborg"],
  ["afvalpas", "milieupas", "afvalkaart", "vuilnispas"],
  ["stroom", "elektriciteit", "elektra"],
  ["leverancier", "energieleverancier"],
  ["ondervloer", "onderlaag"],
  ["meterstand", "meterstanden", "beginstand", "beginstanden"],
  ["allin", "all in"],
];
const stopWords = new Set("de het een en van voor ik mijn hoe wat kan mag moet in op bij is er als met te om welke dat die aan heb je".split(" "));

function searchable(text: string): string {
  let value = normalize(text);
  for (const group of alternatives) {
    for (const term of group) value = value.replace(new RegExp("\\b" + term + "\\b", "g"), group[0]);
  }
  return value;
}

export function searchEntries(entries: SearchEntry[], query: string): SearchEntry[] {
  const phrase = searchable(query);
  if (!phrase) return [];
  const tokens = [...new Set(phrase.split(" ").filter((word) => !stopWords.has(word)))];
  if (!tokens.length) return [];
  return entries.map((entry) => {
    const title = searchable(entry.title);
    const keywords = searchable(entry.keywords.join(" "));
    const answer = searchable(entry.kind === "question" ? entry.answer : entry.description);
    // Every meaningful query word must match; common Dutch question words do not filter.
    if (!tokens.every((word) => [title, keywords, answer].some((field) => field.includes(word)))) return { entry, score: 0 };
    const score = (title.includes(phrase) ? 30 : 0) + tokens.reduce((total, word) =>
      total + (title.includes(word) ? 8 : keywords.includes(word) ? 5 : 2), 0);
    return { entry, score };
  }).filter(({ score }) => score > 0)
    .sort((a, b) => (a.entry.kind === "question" ? 0 : 1) - (b.entry.kind === "question" ? 0 : 1)
      || b.score - a.score || a.entry.title.localeCompare(b.entry.title, "nl"))
    .map(({ entry }) => entry);
}
