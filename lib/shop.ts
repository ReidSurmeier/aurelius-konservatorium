export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageFile: string;
  category: 'catalog' | 'print' | 'accessory' | 'merchandise';
}

export const shopItems: ShopItem[] = [
  {
    id: "catalog-gruss",
    name: 'Exhibition Catalog — "Der Gruß"',
    description: "288 pages, hardcover, bilingual DE/EN. Texts by Prof. Dr. Hildegard Weißenbach-Kronauer and international contributors.",
    price: 38,
    imageFile: "shop-catalog-gruss.jpg",
    category: "catalog"
  },
  {
    id: "tote-bag",
    name: "AKU Tote Bag — Corporate Cultural Heritage",
    description: "Heavy cotton canvas, printed with AKU museum typography. 42 × 38 cm.",
    price: 18,
    imageFile: "shop-tote.jpg",
    category: "merchandise"
  },
  {
    id: "poster-priscilla",
    name: 'Museum Poster — "Priscilla, 2021"',
    description: "High-quality reproduction, 50 × 70 cm, on 200g art paper.",
    price: 24,
    imageFile: "shop-poster-priscilla.jpg",
    category: "print"
  },
  {
    id: "poster-kreis",
    name: 'Museum Poster — "The Circle (After Matisse)"',
    description: "High-quality reproduction, 50 × 70 cm, on 200g art paper.",
    price: 24,
    imageFile: "shop-poster-kreis.jpg",
    category: "print"
  },
  {
    id: "notebook",
    name: "AKU Notebook — Collection Edition",
    description: "A5, thread-bound, 192 pages. Endpapers with AKU logo design.",
    price: 14,
    imageFile: "shop-notebook.jpg",
    category: "merchandise"
  },
  {
    id: "agb-facsimile",
    name: '"The Terms of Service" — Facsimile Print',
    description: "Reproduction of the illuminated manuscript, 6 pages, on parchment paper.",
    price: 65,
    imageFile: "shop-agb.jpg",
    category: "print"
  },
  {
    id: "mug",
    name: 'AKU Coffee Mug — "Shareholder Value"',
    description: "Porcelain, white, with allegorical figure. Dishwasher safe.",
    price: 16,
    imageFile: "shop-mug.jpg",
    category: "merchandise"
  },
  {
    id: "postcards",
    name: "Postcard Set (12 Motifs)",
    description: "The most popular works from the permanent collection on 12 fine art cards.",
    price: 8,
    imageFile: "shop-postcards.jpg",
    category: "print"
  },
  {
    id: "catalog-ipo",
    name: 'Exhibition Catalog — "IPO: The Stock Market Listing as Spectacle"',
    description: "196 pages, softcover, all photographs reproduced at original scale.",
    price: 45,
    imageFile: "shop-catalog-ipo.jpg",
    category: "catalog"
  },
  {
    id: "pin",
    name: "AKU Membership Pin",
    description: "Enameled lapel pin, gold plated. Features the AKU monogram.",
    price: 6,
    imageFile: "shop-pin.jpg",
    category: "accessory"
  },
];
