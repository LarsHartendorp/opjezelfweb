export const categories = [
  { id: "woning-en-huurcontract", label: "Woning en huurcontract", description: "Begrijp de afspraken over je nieuwe woning." },
  { id: "geld-en-woonlasten", label: "Geld en woonlasten", description: "Krijg inzicht in de kosten van zelfstandig wonen." },
  { id: "adres-en-administratie", label: "Adres en administratie", description: "Informatie over je adres en belangrijke documenten." },
  { id: "energie-water-en-internet", label: "Energie, water en internet", description: "Lees over de aansluitingen in je woning." },
  { id: "verzekeringen", label: "Verzekeringen", description: "Begrijp welke verzekeringen bij wonen kunnen horen." },
  { id: "verhuizen-en-inrichten", label: "Verhuizen en inrichten", description: "Bereid je verhuizing en de inrichting van je huis voor." },
  { id: "huishouden-en-veiligheid", label: "Huishouden en veiligheid", description: "Informatie voor een prettig en veilig thuis." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function isCategoryId(value: unknown): value is CategoryId {
  return categories.some((category) => category.id === value);
}

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id)!;
}
