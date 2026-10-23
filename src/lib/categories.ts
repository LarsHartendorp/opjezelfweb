// Enige definitie van categorieën, URL-slugs en subcategorie-ankers.
export const categories = [
  {
    id: "woning-en-huurcontract",
    slug: "woning-en-huurcontract",
    label: "Woning en huurcontract",
    description: "Begrijp je huurcontract, je rechten en de afspraken over je woning.",
    subcategories: [
      { id: "huurafspraken", label: "Huurafspraken en je rechten" },
      { id: "sleutel-en-onderhoud", label: "Sleuteloverdracht en onderhoud" },
    ],
  },
  {
    id: "geld-en-woonlasten",
    slug: "geld-en-woonlasten",
    label: "Geld en woonlasten",
    description: "Krijg inzicht in je woonkosten, servicekosten en huurtoeslag.",
    subcategories: [
      { id: "woonkosten", label: "Huur en andere woonkosten" },
      { id: "toeslagen", label: "Huurtoeslag" },
    ],
  },
  {
    id: "adres-en-administratie",
    slug: "adres-en-administratie",
    label: "Adres en administratie",
    description: "Lees over je adreswijziging, gemeentelijke zaken en woonpapieren.",
    subcategories: [
      { id: "adres-en-gemeente", label: "Je adres en de gemeente" },
      { id: "woonadministratie", label: "Je woonadministratie" },
    ],
  },
  {
    id: "energie-water-en-internet",
    slug: "energie-water-en-internet",
    label: "Energie, water en internet",
    description: "Ontdek wat je zelf regelt voor stroom, warmte, water en internet.",
    subcategories: [
      { id: "energiecontracten", label: "Stroom, gas en warmte" },
      { id: "water-en-internet", label: "Water en internet" },
    ],
  },
  {
    id: "verzekeringen",
    slug: "verzekeringen",
    label: "Verzekeringen",
    description: "Begrijp welke verzekeringen bij jouw woning en spullen passen.",
    subcategories: [
      { id: "spullen-en-schade", label: "Je spullen en schade" },
      { id: "dekking-bij-verhuizen", label: "Je dekking bij een verhuizing" },
    ],
  },
  {
    id: "verhuizen-en-inrichten",
    slug: "verhuizen-en-inrichten",
    label: "Verhuizen en inrichten",
    description: "Bereid je verhuisdag voor en lees over meubels, vloeren en inrichting.",
    subcategories: [
      { id: "verhuizen-en-overnemen", label: "Verhuizen en spullen overnemen" },
      { id: "inrichting-en-vloeren", label: "Je inrichting en vloeren" },
    ],
  },
  {
    id: "huishouden-en-veiligheid",
    slug: "huishouden-en-veiligheid",
    label: "Huishouden en veiligheid",
    description: "Lees over veilig wonen, ventileren en het delen van je huishouden.",
    subcategories: [
      { id: "veilig-en-gezond", label: "Veilig en gezond wonen" },
      { id: "samen-wonen", label: "Samen een huishouden delen" },
    ],
  },
] as const;

export type Category = (typeof categories)[number];
export type CategoryId = Category["id"];
export type SubcategoryId = Category["subcategories"][number]["id"];

export function isCategoryId(value: unknown): value is CategoryId {
  return categories.some((category) => category.id === value);
}

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id)!;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function isSubcategoryId(categoryId: CategoryId, value: unknown): value is SubcategoryId {
  return getCategory(categoryId).subcategories.some((subcategory) => subcategory.id === value);
}

export function getSubcategory(categoryId: CategoryId, id: SubcategoryId) {
  return getCategory(categoryId).subcategories.find((subcategory) => subcategory.id === id)!;
}

export function getCategoryPath(id: CategoryId) {
  return `/categorieen/${getCategory(id).slug}/`;
}
