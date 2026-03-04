export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageFile: string;
  category: 'catalog' | 'print' | 'accessory' | 'merchandise';
}

export const shopItems: ShopItem[] = [
  { id: "catalog-gruss", name: 'Ausstellungskatalog "Der Gruß"', description: "288 Seiten, Hardcover, zweisprachig DE/EN. Texte von Prof. Dr. Hildegard Weißenbach-Kronauer und internationalen Gästen.", price: 38, imageFile: "shop-catalog-gruss.jpg", category: "catalog" },
  { id: "tote-bag", name: "AKU Tragetasche — Korporative Kulturgüter", description: "Schweres Baumwollgewebe, bedruckt mit der AKU-Museumsschrift. 42 × 38 cm.", price: 18, imageFile: "shop-tote.jpg", category: "merchandise" },
  { id: "poster-priscilla", name: 'Museumsposter "Priscilla, 2021"', description: "Hochwertige Reproduktion, 50 × 70 cm, auf 200g Kunstdruck.", price: 24, imageFile: "shop-poster-priscilla.jpg", category: "print" },
  { id: "poster-kreis", name: 'Museumsposter "Der Kreis (Nach Matisse)"', description: "Hochwertige Reproduktion, 50 × 70 cm, auf 200g Kunstdruck.", price: 24, imageFile: "shop-poster-kreis.jpg", category: "print" },
  { id: "notebook", name: "AKU Notizbuch — Sammlungsausgabe", description: "A5, Fadenbindung, 192 Seiten. Vorsatzpapier mit AKU-Logodesign.", price: 14, imageFile: "shop-notebook.jpg", category: "merchandise" },
  { id: "agb-facsimile", name: '"Die AGB" — Faksimile-Druck', description: "Reproduktion des illuminierten Manuskripts, 6 Seiten, auf Pergamentpapier.", price: 65, imageFile: "shop-agb.jpg", category: "print" },
  { id: "mug", name: 'AKU Kaffeebecher — "Shareholder Value"', description: "Porzellan, weiß, mit Allegoriedarstellung. Spülmaschinenfest.", price: 16, imageFile: "shop-mug.jpg", category: "merchandise" },
  { id: "postcards", name: "Postkarten-Set (12 Motive)", description: "Die beliebtesten Werke aus der Ständigen Sammlung auf 12 Kunstdruckkarten.", price: 8, imageFile: "shop-postcards.jpg", category: "print" },
  { id: "catalog-ipo", name: 'Ausstellungskatalog "IPO: Der Börsengang als Spektakel"', description: "196 Seiten, Softcover, alle Fotografien in Originalgröße reproduziert.", price: 45, imageFile: "shop-catalog-ipo.jpg", category: "catalog" },
  { id: "pin", name: "AKU Mitgliedschafts-Pin", description: "Emaillierter Ansteckpin, vergoldet. Zeigt das AKU-Monogramm.", price: 6, imageFile: "shop-pin.jpg", category: "accessory" },
];
