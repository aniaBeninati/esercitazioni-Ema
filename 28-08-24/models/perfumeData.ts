export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  fragrances: string[];
}

export interface PerfumeDetail extends Perfume {
  description: string;
  genre: 'maschile' | 'femminile' | 'unisex';
  imageUrl: string;
}

export interface PerfumeData {
  totalCount: number;
  perfumes: Perfume[];
  'perfume-details': PerfumeDetail[];
}


  export const getPerfumeData = (): PerfumeData => {
    // Qui inseriremmo normalmente una chiamata API,
    // ma per ora useremo i dati statici
    return {
      totalCount: 60,
      perfumes: [
        {
          id: "1",
          name: "Chanel No. 5",
          brand: "Chanel",
          price: 100,
          fragrances: [
            "Aldehydes", 
            "Ylang-Ylang", 
            "Jasmine", 
            "Rose", 
            "Sandalwood"]
        },
        {
          "id": "2",
          "name": "Dior Sauvage",
          "brand": "Dior",
          "price": 85,
          "fragrances": [
            "Bergamot",
            "Pepper",
            "Lavender",
            "Vetiver",
            "Patchouli"
          ]
        },
        {
          "id": "3",
          "name": "Acqua di Giò",
          "brand": "Giorgio Armani",
          "price": 75,
          "fragrances": [
            "Jasmine",
            "Rosemary",
            "Marine notes",
            "Cedarwood"
          ]
        },
        {
          "id": "4",
          "name": "Coco Mademoiselle",
          "brand": "Chanel",
          "price": 120,
          "fragrances": [
            "Orange",
            "Jasmine",
            "Rose",
            "Patchouli",
            "Vanilla"
          ]
        },
        {
          "id": "6",
          "name": "La Vie Est Belle",
          "brand": "Lancôme",
          "price": 110,
          "fragrances": [
            "Iris",
            "Patchouli",
            "Gourmand"
          ]
        },
        {
          "id": "7",
          "name": "Light Blue",
          "brand": "Dolce & Gabbana",
          "price": 85,
          "fragrances": [
            "Apple",
            "Cedar",
            "Bluebell",
            "Bamboo",
            "Jasmine"
          ]
        },
        {
          "id": "8",
          "name": "One Million",
          "brand": "Paco Rabanne",
          "price": 90,
          "fragrances": [
            "Blood Mandarin",
            "Peppermint",
            "Rose",
            "Cinnamon",
            "Leather"
          ]
        },
        {
          "id": "9",
          "name": "J'adore",
          "brand": "Dior",
          "price": 130,
          "fragrances": [
            "Ylang-Ylang",
            "Damascus Rose",
            "Jasmine"
          ]
        },
        {
          "id": "11",
          "name": "Le Male",
          "brand": "Jean Paul Gaultier",
          "price": 80,
          "fragrances": [
            "Lavender",
            "Mint",
            "Vanilla",
            "Cardamom"
          ]
        },
        {
          "id": "12",
          "name": "Good Girl",
          "brand": "Carolina Herrera",
          "price": 115,
          "fragrances": [
            "Almond",
            "Cocoa",
            "Jasmine",
            "Tonka Bean"
          ]
        },
        {
          "id": "13",
          "name": "The One",
          "brand": "Dolce & Gabbana",
          "price": 105,
          "fragrances": [
            "Bergamot",
            "Peach",
            "Vanilla",
            "Musk"
          ]
        },
        {
          "id": "14",
          "name": "Eros",
          "brand": "Versace",
          "price": 95,
          "fragrances": [
            "Mint",
            "Green Apple",
            "Vanilla",
            "Oakmoss"
          ]
        },
        {
          "id": "15",
          "name": "Flowerbomb",
          "brand": "Viktor & Rolf",
          "price": 130,
          "fragrances": [
            "Jasmine",
            "Orange Tree",
            "Patchouli",
            "Rose",
            "Vanilla"
          ]
        },
        {
          "id": "16",
          "name": "Invictus",
          "brand": "Paco Rabanne",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Marine Accord",
            "Bay Leaf",
            "Ambergris"
          ]
        },
        {
          "id": "17",
          "name": "Alien",
          "brand": "Thierry Mugler",
          "price": 125,
          "fragrances": [
            "Jasmine",
            "Cashmere Wood",
            "Amber"
          ]
        },
        {
          "id": "18",
          "name": "Gucci Guilty",
          "brand": "Gucci",
          "price": 95,
          "fragrances": [
            "Mandarin",
            "Pink Pepper",
            "Lilac",
            "Patchouli"
          ]
        },
        {
          "id": "19",
          "name": "Bvlgari Man in Black",
          "brand": "Bvlgari",
          "price": 110,
          "fragrances": [
            "Rum",
            "Leather",
            "Amber",
            "Spices"
          ]
        },
        {
          "id": "20",
          "name": "Si",
          "brand": "Giorgio Armani",
          "price": 115,
          "fragrances": [
            "Cassis",
            "Rose",
            "Vanilla"
          ]
        },
        {
          "id": "21",
          "name": "L'Eau d'Issey",
          "brand": "Issey Miyake",
          "price": 85,
          "fragrances": [
            "Lotus",
            "Freesia",
            "Cyclamen",
            "Cedar"
          ]
        },
        {
          "id": "22",
          "name": "Terre d'Hermès",
          "brand": "Hermès",
          "price": 120,
          "fragrances": [
            "Grapefruit",
            "Orange",
            "Pepper",
            "Vetiver",
            "Cedar"
          ]
        },
        {
          "id": "23",
          "name": "Chloé Eau de Parfum",
          "brand": "Chloé",
          "price": 105,
          "fragrances": [
            "Peony",
            "Lychee",
            "Freesia",
            "Rose",
            "Magnolia"
          ]
        },
        {
          "id": "24",
          "name": "Aventus",
          "brand": "Creed",
          "price": 350,
          "fragrances": [
            "Pineapple",
            "Bergamot",
            "Black Currant",
            "Musk",
            "Oakmoss"
          ]
        },
        {
          "id": "25",
          "name": "Prada Candy",
          "brand": "Prada",
          "price": 95,
          "fragrances": [
            "Caramel",
            "Vanilla",
            "Musk",
            "Benzoin"
          ]
        },
        {
          "id": "26",
          "name": "Allure Homme Sport",
          "brand": "Chanel",
          "price": 110,
          "fragrances": [
            "Orange",
            "Aldehydes",
            "Pepper",
            "Cedar",
            "Tonka Bean"
          ]
        },
        {
          "id": "27",
          "name": "Olympea",
          "brand": "Paco Rabanne",
          "price": 90,
          "fragrances": [
            "Green Mandarin",
            "Vanilla",
            "Salted Vanilla",
            "Ambergris"
          ]
        },
        {
          "id": "28",
          "name": "Euphoria",
          "brand": "Calvin Klein",
          "price": 80,
          "fragrances": [
            "Pomegranate",
            "Persimmon",
            "Black Orchid",
            "Amber",
            "Violet"
          ]
        },
        {
          "id": "29",
          "name": "Azzaro Wanted",
          "brand": "Azzaro",
          "price": 75,
          "fragrances": [
            "Lemon",
            "Ginger",
            "Cardamom",
            "Vetiver",
            "Tonka Bean"
          ]
        },
        {
          "id": "30",
          "name": "L'Instant de Guerlain",
          "brand": "Guerlain",
          "price": 125,
          "fragrances": [
            "Citrus",
            "Magnolia",
            "Honey",
            "Amber"
          ]
        },
        {
          "id": "31",
          "name": "Omnia Crystalline",
          "brand": "Bvlgari",
          "price": 80,
          "fragrances": [
            "Bamboo",
            "Nashi Pear",
            "Lotus",
            "Balsa Wood"
          ]
        },
        {
          "id": "32",
          "name": "Pour Homme",
          "brand": "Versace",
          "price": 70,
          "fragrances": [
            "Lemon",
            "Bergamot",
            "Neroli",
            "Geranium",
            "Musk"
          ]
        },
        {
          "id": "33",
          "name": "Dolce",
          "brand": "Dolce & Gabbana",
          "price": 85,
          "fragrances": [
            "Neroli",
            "Papaya Flower",
            "White Amaryllis",
            "Narcissus"
          ]
        },
        {
          "id": "34",
          "name": "Cool Water",
          "brand": "Davidoff",
          "price": 65,
          "fragrances": [
            "Mint",
            "Sea Water",
            "Lavender",
            "Sandalwood",
            "Tobacco"
          ]
        },
        {
          "id": "35",
          "name": "Pure Poison",
          "brand": "Dior",
          "price": 120,
          "fragrances": [
            "Jasmine",
            "Orange Blossom",
            "Gardenia",
            "Sandalwood",
            "Amber"
          ]
        },
        {
          "id": "36",
          "name": "L'Homme",
          "brand": "Yves Saint Laurent",
          "price": 100,
          "fragrances": [
            "Ginger",
            "Bergamot",
            "Lemon",
            "Violet Leaf",
            "Vetiver"
          ]
        },
        {
          "id": "37",
          "name": "Flower by Kenzo",
          "brand": "Kenzo",
          "price": 110,
          "fragrances": [
            "Bulgarian Rose",
            "Parma Violet",
            "Vanilla",
            "White Musk"
          ]
        },
        {
          "id": "38",
          "name": "Spicebomb",
          "brand": "Viktor & Rolf",
          "price": 95,
          "fragrances": [
            "Chili",
            "Saffron",
            "Leather",
            "Tobacco",
            "Vetiver"
          ]
        },
        {
          "id": "39",
          "name": "L'Interdit",
          "brand": "Givenchy",
          "price": 125,
          "fragrances": [
            "Orange Blossom",
            "Jasmine",
            "Tuberose",
            "Vetiver",
            "Patchouli"
          ]
        },
        {
          "id": "40",
          "name": "212 Men",
          "brand": "Carolina Herrera",
          "price": 80,
          "fragrances": [
            "Green Notes",
            "Grapefruit",
            "Ginger",
            "Sandalwood",
            "Musk"
          ]
        },
        {
          "id": "41",
          "name": "Eau Sauvage",
          "brand": "Dior",
          "price": 95,
          "fragrances": [
            "Lemon",
            "Rosemary",
            "Basil",
            "Cumin",
            "Vetiver"
          ]
        },
        {
          "id": "42",
          "name": "La Nuit de L'Homme",
          "brand": "Yves Saint Laurent",
          "price": 105,
          "fragrances": [
            "Cardamom",
            "Lavender",
            "Cedar",
            "Vetiver"
          ]
        },
        {
          "id": "43",
          "name": "Gucci Bloom",
          "brand": "Gucci",
          "price": 120,
          "fragrances": [
            "Rangoon Creeper",
            "Tuberose",
            "Jasmine Bud"
          ]
        },
        {
          "id": "44",
          "name": "Light Blue Pour Homme",
          "brand": "Dolce & Gabbana",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Bergamot",
            "Pepper",
            "Rosemary",
            "Musk"
          ]
        },
        {
          "id": "45",
          "name": "L'Air du Temps",
          "brand": "Nina Ricci",
          "price": 75,
          "fragrances": [
            "Carnation",
            "Gardenia",
            "Rose",
            "Iris"
          ]
        },
        {
          "id": "46",
          "name": "Hugo",
          "brand": "Hugo Boss",
          "price": 70,
          "fragrances": [
            "Green Apple",
            "Mint",
            "Lavender",
            "Pine",
            "Basil"
          ]
        },
        {
          "id": "47",
          "name": "Mon Paris",
          "brand": "Yves Saint Laurent",
          "price": 115,
          "fragrances": [
            "Strawberry",
            "Raspberry",
            "Pear",
            "Peony",
            "Patchouli"
          ]
        },
        {
          "id": "48",
          "name": "Polo Blue",
          "brand": "Ralph Lauren",
          "price": 90,
          "fragrances": [
            "Melon",
            "Cucumber",
            "Basil",
            "Sage",
            "Musk"
          ]
        },
        {
          "id": "49",
          "name": "L'Imperatrice",
          "brand": "Dolce & Gabbana",
          "price": 85,
          "fragrances": [
            "Watermelon",
            "Kiwi",
            "Pink Cyclamen",
            "Musk"
          ]
        },
        {
          "id": "50",
          "name": "Acqua di Parma Colonia",
          "brand": "Acqua di Parma",
          "price": 150,
          "fragrances": [
            "Lemon",
            "Bergamot",
            "Lavender",
            "Rosemary",
            "Rose"
          ]
        },
        {
          "id": "51",
          "name": "Nuit d'Issey",
          "brand": "Issey Miyake",
          "price": 95,
          "fragrances": [
            "Leather",
            "Woods",
            "Black Pepper",
            "Vetiver"
          ]
        },
        {
          "id": "52",
          "name": "Amor Amor",
          "brand": "Cacharel",
          "price": 65,
          "fragrances": [
            "Black Currant",
            "Mandarin",
            "Jasmine",
            "Vanilla",
            "Musk"
          ]
        },
        {
          "id": "53",
          "name": "Invictus Aqua",
          "brand": "Paco Rabanne",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Marine Accord",
            "Violet Leaf",
            "Ambergris"
          ]
        },
        {
          "id": "54",
          "name": "La Petite Robe Noire",
          "brand": "Guerlain",
          "price": 120,
          "fragrances": [
            "Black Cherry",
            "Almond",
            "Rose",
            "Tea",
            "Tonka Bean"
          ]
        },
        {
          "id": "55",
          "name": "Armani Code",
          "brand": "Giorgio Armani",
          "price": 100,
          "fragrances": [
            "Lemon",
            "Star Anise",
            "Olive Blossom",
            "Tonka Bean",
            "Guaiac Wood"
          ]
        },
        {
          "id": "56",
          "name": "Joy",
          "brand": "Jean Patou",
          "price": 160,
          "fragrances": [
            "Jasmine",
            "Rose",
            "Ylang-Ylang",
            "Musk"
          ]
        },
        {
          "id": "57",
          "name": "Homme",
          "brand": "Dior",
          "price": 115,
          "fragrances": [
            "Iris",
            "Vetiver",
            "Cedar",
            "Lavender",
            "Amber"
          ]
        },
        {
          "id": "58",
          "name": "Black Opium",
          "brand": "Yves Saint Laurent",
          "price": 130,
          "fragrances": [
            "Coffee",
            "Vanilla",
            "White Flowers",
            "Jasmine",
            "Cedar"
          ]
        },
        {
          "id": "59",
          "name": "1 Million Lucky",
          "brand": "Paco Rabanne",
          "price": 95,
          "fragrances": [
            "Hazelnut",
            "Green Plum",
            "Grapefruit",
            "Cedar",
            "Honey"
          ]
        },
        {
          "id": "60",
          "name": "Luna Rossa",
          "brand": "Prada",
          "price": 110,
          "fragrances": [
            "Lavender",
            "Bitter Orange",
            "Clary Sage",
            "Mint",
            "Ambergris"
          ]
        },
        {
          "id": "aaef1097-064f-49ef-899f-72d826cdaf3a",
          "name": "Intense Café",
          "brand": "Montale",
          "price": 155.00,
          "fragrances": [
            " Coffee",    
            "Rose",     
            "Vanilla",     
            "Amber",     
            "White Musk"]
        },
      ],
      'perfume-details': [
        {
          id: "1",
          name: "Chanel No. 5",
          brand: "Chanel",
          description: "A timeless fragrance with a blend of floral and aldehydic notes.",
          price: 100,
          fragrances: [
            "Aldehydes", 
            "Ylang-Ylang", 
            "Jasmine", "Rose", 
            "Sandalwood"],
          genre: "maschile",
          imageUrl: "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0a5abbb6/images/hi-res/SKU/SKU_4/337229_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "2",
          "name": "Dior Sauvage",
          "brand": "Dior",
          "description": "A fresh and bold scent with notes of bergamot and pepper.",
          "price": 85,
          "fragrances": [
            "Bergamot",
            "Pepper",
            "Lavender",
            "Vetiver",
            "Patchouli"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/p/sauvage-elixir---parfum-da-uomo----note-agrumate%2C-speziate-e-legnose-P10017596.html"
        },
        {
          "id": "3",
          "name": "Acqua di Giò",
          "brand": "Giorgio Armani",
          "description": "An aquatic fragrance with notes of jasmine and rosemary.",
          "price": 75,
          "fragrances": [
            "Jasmine",
            "Rosemary",
            "Marine notes",
            "Cedarwood"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwefdf91dd/images/hi-res/SKU/SKU_1/202463_swatch.jpg"
        },
        {
          "id": "4",
          "name": "Coco Mademoiselle",
          "brand": "Chanel",
          "description": "A modern fragrance with a strong personality, yet surprisingly fresh.",
          "price": 120,
          "fragrances": [
            "Orange",
            "Jasmine",
            "Rose",
            "Patchouli",
            "Vanilla"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb7650ff9/images/hi-res/SKU/SKU_666/467347_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "6",
          "name": "La Vie Est Belle",
          "brand": "Lancôme",
          "description": "A floral gourmand fragrance that embodies happiness and femininity.",
          "price": 110,
          "fragrances": [
            "Iris",
            "Patchouli",
            "Gourmand"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7b6d2192/images/hi-res/SKU/SKU_2/254230_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "7",
          "name": "Light Blue",
          "brand": "Dolce & Gabbana",
          "description": "A fresh and fruity scent that evokes the spirit of a Sicilian summer.",
          "price": 85,
          "fragrances": [
            "Apple",
            "Cedar",
            "Bluebell",
            "Bamboo",
            "Jasmine"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw55436c20/images/hi-res/PID_principal/PID_principal_2/P30515_principal.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "8",
          "name": "One Million",
          "brand": "Paco Rabanne",
          "description": "A spicy fragrance with a blend of fresh and woody notes.",
          "price": 90,
          "fragrances": [
            "Blood Mandarin",
            "Peppermint",
            "Rose",
            "Cinnamon",
            "Leather"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw564b79cc/images/hi-res/SKU/SKU_3932/654153_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "9",
          "name": "J'adore",
          "brand": "Dior",
          "description": "A bouquet of floral notes with a touch of sweetness and freshness.",
          "price": 130,
          "fragrances": [
            "Ylang-Ylang",
            "Damascus Rose",
            "Jasmine"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw046c217c/images/hi-res/SKU/SKU_6/71388_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "11",
          "name": "Le Male",
          "brand": "Jean Paul Gaultier",
          "description": "A strong and masculine fragrance with notes of lavender and vanilla.",
          "price": 80,
          "fragrances": [
            "Lavender",
            "Mint",
            "Vanilla",
            "Cardamom"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw9f5a5524/images/hi-res/SKU/515090_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "12",
          "name": "Good Girl",
          "brand": "Carolina Herrera",
          "description": "A bold and daring scent with a mix of bright and dark notes.",
          "price": 115,
          "fragrances": [
            "Almond",
            "Cocoa",
            "Jasmine",
            "Tonka Bean"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw21ac67bb/images/hi-res/SKU/SKU_4831/363327_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "13",
          "name": "The One",
          "brand": "Dolce & Gabbana",
          "description": "A warm and elegant fragrance with a blend of oriental and floral notes.",
          "price": 105,
          "fragrances": [
            "Bergamot",
            "Peach",
            "Vanilla",
            "Musk"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4ed7da88/images/hi-res/SKU/SKU_1/146782_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "14",
          "name": "Eros",
          "brand": "Versace",
          "description": "A bold and masculine scent with a blend of mint, vanilla, and oakmoss.",
          "price": 95,
          "fragrances": [
            "Mint",
            "Green Apple",
            "Vanilla",
            "Oakmoss"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1c42081c/images/hi-res/SKU/SKU_1687/528281_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "15",
          "name": "Flowerbomb",
          "brand": "Viktor & Rolf",
          "description": "A floral explosion with a blend of sambac jasmine, orange tree, and patchouli.",
          "price": 130,
          "fragrances": [
            "Jasmine",
            "Orange Tree",
            "Patchouli",
            "Rose",
            "Vanilla"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/viktor-rolf/3360374000059_01-o/viktor-rolf-flowerbomb-eau-de-parfum-da-donna___240224.jpg"
        },
        {
          "id": "16",
          "name": "Invictus",
          "brand": "Paco Rabanne",
          "description": "A fresh and sporty fragrance with notes of marine accord and grapefruit.",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Marine Accord",
            "Bay Leaf",
            "Ambergris"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6109ee89/images/hi-res/SKU/SKU_1116/272552_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "17",
          "name": "Alien",
          "brand": "Thierry Mugler",
          "description": "A mysterious and enchanting scent with warm, woody, and amber notes.",
          "price": 125,
          "fragrances": [
            "Jasmine",
            "Cashmere Wood",
            "Amber"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc13969ff/images/hi-res/SKU/SKU_4238/133838_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "18",
          "name": "Gucci Guilty",
          "brand": "Gucci",
          "description": "A modern and sophisticated fragrance with a blend of spicy and floral notes.",
          "price": 95,
          "fragrances": [
            "Mandarin",
            "Pink Pepper",
            "Lilac",
            "Patchouli"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw438e040e/images/hi-res/SKU/SKU_4653/702373_swatch.jpeg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "19",
          "name": "Bvlgari Man in Black",
          "brand": "Bvlgari",
          "description": "A charismatic and intense scent with notes of amber, rum, and leather.",
          "price": 110,
          "fragrances": [
            "Rum",
            "Leather",
            "Amber",
            "Spices"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw18bb705e/images/hi-res/SKU/SKU_3/307803_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "20",
          "name": "Si",
          "brand": "Giorgio Armani",
          "description": "A graceful and intense fragrance with notes of cassis, rose, and vanilla.",
          "price": 115,
          "fragrances": [
            "Cassis",
            "Rose",
            "Vanilla"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0fa7fd1e/images/hi-res/SKU/SKU_3426/275001_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "21",
          "name": "L'Eau d'Issey",
          "brand": "Issey Miyake",
          "description": "A fresh and aquatic scent with floral and woody notes.",
          "price": 85,
          "fragrances": [
            "Lotus",
            "Freesia",
            "Cyclamen",
            "Cedar"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0a519f40/images/hi-res/SKU/SKU_1/16376_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "22",
          "name": "Terre d'Hermès",
          "brand": "Hermès",
          "description": "A woody and earthy fragrance with a blend of citrus and mineral notes.",
          "price": 120,
          "fragrances": [
            "Grapefruit",
            "Orange",
            "Pepper",
            "Vetiver",
            "Cedar"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwf4c72fac/images/hi-res/SKU/SKU_1/139325_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "23",
          "name": "Chloé Eau de Parfum",
          "brand": "Chloé",
          "description": "A fresh and elegant scent with floral and powdery notes.",
          "price": 105,
          "fragrances": [
            "Peony",
            "Lychee",
            "Freesia",
            "Rose",
            "Magnolia"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwad64fe56/images/hi-res/SKU/SKU_4625/168692_swatch.jpeg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "24",
          "name": "Aventus",
          "brand": "Creed",
          "description": "A bold and sophisticated fragrance with fruity and woody notes.",
          "price": 350,
          "fragrances": [
            "Pineapple",
            "Bergamot",
            "Black Currant",
            "Musk",
            "Oakmoss"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/creed/3508441001114_01n-o/creed-aventus-eau-de-parfum-per-uomo___180419.jpg"
        },
        {
          "id": "25",
          "name": "Prada Candy",
          "brand": "Prada",
          "description": "A sweet and playful scent with caramel and vanilla notes.",
          "price": 95,
          "fragrances": [
            "Caramel",
            "Vanilla",
            "Musk",
            "Benzoin"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3fb967ce/images/hi-res/SKU/SKU_2/232365_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "26",
          "name": "Allure Homme Sport",
          "brand": "Chanel",
          "description": "A fresh and energizing fragrance with aquatic and spicy notes.",
          "price": 110,
          "fragrances": [
            "Orange",
            "Aldehydes",
            "Pepper",
            "Cedar",
            "Tonka Bean"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwffc22708/images/hi-res/SKU/SKU_2/243104_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "27",
          "name": "Olympea",
          "brand": "Paco Rabanne",
          "description": "A sensual fragrance with a blend of salty vanilla and floral notes.",
          "price": 90,
          "fragrances": [
            "Green Mandarin",
            "Vanilla",
            "Salted Vanilla",
            "Ambergris"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw041565eb/images/hi-res/SKU/SKU_1116/332083_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "28",
          "name": "Euphoria",
          "brand": "Calvin Klein",
          "description": "A captivating and exotic fragrance with fruity and floral notes.",
          "price": 80,
          "fragrances": [
            "Pomegranate",
            "Persimmon",
            "Black Orchid",
            "Amber",
            "Violet"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwcf096ad5/images/hi-res/SKU/SKU_3578/215318_swatch.jpeg"
        },
        {
          "id": "29",
          "name": "Azzaro Wanted",
          "brand": "Azzaro",
          "description": "A bold and irresistible scent with spicy and woody notes.",
          "price": 75,
          "fragrances": [
            "Lemon",
            "Ginger",
            "Cardamom",
            "Vetiver",
            "Tonka Bean"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/azzaro/3351500009848_01-o/azzaro-wanted-by-night-eau-de-parfum-per-uomo___190513.jpg"
        },
        {
          "id": "30",
          "name": "L'Instant de Guerlain",
          "brand": "Guerlain",
          "description": "A delicate and elegant fragrance with citrus and honey notes.",
          "price": 125,
          "fragrances": [
            "Citrus",
            "Magnolia",
            "Honey",
            "Amber"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/guerlain/3346470304895_01/guerlain-linstant-de-guerlain-pour-homme-eau-de-parfum-per-uomo___220502.jpg"
        },
        {
          "id": "31",
          "name": "Omnia Crystalline",
          "brand": "Bvlgari",
          "description": "A fresh and sparkling fragrance with floral and woody notes.",
          "price": 80,
          "fragrances": [
            "Bamboo",
            "Nashi Pear",
            "Lotus",
            "Balsa Wood"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/bulgari/783320420566_01/bulgari-omnia-crystalline-eau-de-toilette-da-donna___230710.jpg"
        },
        {
          "id": "32",
          "name": "Pour Homme",
          "brand": "Versace",
          "description": "A classic and elegant scent with citrus and woody notes.",
          "price": 70,
          "fragrances": [
            "Lemon",
            "Bergamot",
            "Neroli",
            "Geranium",
            "Musk"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/givenchy/3274870302367_01/givenchy-givenchy-pour-homme-eau-de-toilette-per-uomo___220711.jpg"
        },
        {
          "id": "33",
          "name": "Dolce",
          "brand": "Dolce & Gabbana",
          "description": "A soft and feminine fragrance with white floral notes.",
          "price": 85,
          "fragrances": [
            "Neroli",
            "Papaya Flower",
            "White Amaryllis",
            "Narcissus"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa1942eaa/images/hi-res/SKU/SKU_4632/702371_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "34",
          "name": "Cool Water",
          "brand": "Davidoff",
          "description": "A refreshing and aquatic fragrance with notes of mint and ocean air.",
          "price": 65,
          "fragrances": [
            "Mint",
            "Sea Water",
            "Lavender",
            "Sandalwood",
            "Tobacco"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwaa4d7d3a/images/hi-res/SKU/SKU_4/32854_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "35",
          "name": "Pure Poison",
          "brand": "Dior",
          "description": "A hypnotic and enchanting fragrance with white floral notes.",
          "price": 120,
          "fragrances": [
            "Jasmine",
            "Orange Blossom",
            "Gardenia",
            "Sandalwood",
            "Amber"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4e1b6910/images/hi-res/SKU/SKU_1/118741_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "36",
          "name": "L'Homme",
          "brand": "Yves Saint Laurent",
          "description": "A woody and floral fragrance with fresh citrus and ginger notes.",
          "price": 100,
          "fragrances": [
            "Ginger",
            "Bergamot",
            "Lemon",
            "Violet Leaf",
            "Vetiver"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1a647a38/images/hi-res/SKU/SKU_5/360494_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "37",
          "name": "Flower by Kenzo",
          "brand": "Kenzo",
          "description": "A poetic and floral fragrance with powdery and vanilla notes.",
          "price": 110,
          "fragrances": [
            "Bulgarian Rose",
            "Parma Violet",
            "Vanilla",
            "White Musk"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd0a92c93/images/hi-res/SKU/SKU_1/202365_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "38",
          "name": "Spicebomb",
          "brand": "Viktor & Rolf",
          "description": "An explosive and spicy scent with a blend of chili, saffron, and leather.",
          "price": 95,
          "fragrances": [
            "Chili",
            "Saffron",
            "Leather",
            "Tobacco",
            "Vetiver"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/viktor-rolf/3614270659652_01-o/viktor-rolf-spicebomb-extreme-eau-de-parfum-per-uomo___150715.jpg"
        },
        {
          "id": "39",
          "name": "L'Interdit",
          "brand": "Givenchy",
          "description": "A daring and elegant fragrance with floral and woody notes.",
          "price": 125,
          "fragrances": [
            "Orange Blossom",
            "Jasmine",
            "Tuberose",
            "Vetiver",
            "Patchouli"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc4805050/images/hi-res/SKU/SKU_1/437736_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "40",
          "name": "212 Men",
          "brand": "Carolina Herrera",
          "description": "A fresh and dynamic fragrance with green and woody notes.",
          "price": 80,
          "fragrances": [
            "Green Notes",
            "Grapefruit",
            "Ginger",
            "Sandalwood",
            "Musk"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/carolina-herrera/8411061092354_01/carolina-herrera-212-heroes-confezione-regalo-per-uomo___240319.jpg"
        },
        {
          "id": "41",
          "name": "Eau Sauvage",
          "brand": "Dior",
          "description": "A classic citrus fragrance with herbal and spicy undertones.",
          "price": 95,
          "fragrances": [
            "Lemon",
            "Rosemary",
            "Basil",
            "Cumin",
            "Vetiver"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw533288ef/images/hi-res/SKU/SKU_2441/558095_swatch.jpg"
        },
        {
          "id": "42",
          "name": "La Nuit de L'Homme",
          "brand": "Yves Saint Laurent",
          "description": "A dark and seductive fragrance with spicy and woody notes.",
          "price": 105,
          "fragrances": [
            "Cardamom",
            "Lavender",
            "Cedar",
            "Vetiver"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dweca2afd5/images/hi-res/SKU/SKU_1/186318_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "43",
          "name": "Gucci Bloom",
          "brand": "Gucci",
          "description": "A rich white floral fragrance that captures the essence of a blooming garden.",
          "price": 120,
          "fragrances": [
            "Rangoon Creeper",
            "Tuberose",
            "Jasmine Bud"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw194e383f/images/hi-res/SKU/SKU_4599/404959_swatch.jpeg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "44",
          "name": "Light Blue Pour Homme",
          "brand": "Dolce & Gabbana",
          "description": "A fresh and invigorating scent with citrus and spicy notes.",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Bergamot",
            "Pepper",
            "Rosemary",
            "Musk"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5917ae7c/images/hi-res/PID_principal/PID_principal_2/P2898008_principal.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "45",
          "name": "L'Air du Temps",
          "brand": "Nina Ricci",
          "description": "A timeless floral fragrance with notes of carnation and gardenia.",
          "price": 75,
          "fragrances": [
            "Carnation",
            "Gardenia",
            "Rose",
            "Iris"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/nina-ricci/3137370302131_01-o/nina-ricci-lair-du-temps-eau-de-parfum-da-donna___181116.jpg"
        },
        {
          "id": "46",
          "name": "Hugo",
          "brand": "Hugo Boss",
          "description": "A fresh and aromatic fragrance with green and aquatic notes.",
          "price": 70,
          "fragrances": [
            "Green Apple",
            "Mint",
            "Lavender",
            "Pine",
            "Basil"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4296bcb1/images/hi-res/SKU/SKU_4616/482590_swatch.jpeg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "47",
          "name": "Mon Paris",
          "brand": "Yves Saint Laurent",
          "description": "A captivating and intense fragrance with notes of red berries and white flowers.",
          "price": 115,
          "fragrances": [
            "Strawberry",
            "Raspberry",
            "Pear",
            "Peony",
            "Patchouli"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4c5d22a8/images/hi-res/SKU/SKU_4/357989_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "48",
          "name": "Polo Blue",
          "brand": "Ralph Lauren",
          "description": "A fresh and aquatic fragrance with a blend of melon, cucumber, and basil.",
          "price": 90,
          "fragrances": [
            "Melon",
            "Cucumber",
            "Basil",
            "Sage",
            "Musk"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/ralph-lauren/ralpobm_aedp20_04/ralph-lauren-polo-blue-eau-de-parfum-per-uomo___160815.jpg"
        },
        {
          "id": "49",
          "name": "L'Imperatrice",
          "brand": "Dolce & Gabbana",
          "description": "A vibrant and fruity fragrance with notes of watermelon and kiwi.",
          "price": 85,
          "fragrances": [
            "Watermelon",
            "Kiwi",
            "Pink Cyclamen",
            "Musk"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3ba9081b/images/hi-res/SKU/SKU_4284/659406_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "50",
          "name": "Acqua di Parma Colonia",
          "brand": "Acqua di Parma",
          "description": "A classic citrus fragrance with a blend of lavender, rosemary, and rose.",
          "price": 150,
          "fragrances": [
            "Lemon",
            "Bergamot",
            "Lavender",
            "Rosemary",
            "Rose"
          ],
          "genre": "unisex",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4a85e83e/images/hi-res/SKU/SKU_3857/477951_swatch.jpeg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "51",
          "name": "Nuit d'Issey",
          "brand": "Issey Miyake",
          "description": "A mysterious and masculine fragrance with notes of leather and woods.",
          "price": 95,
          "fragrances": [
            "Leather",
            "Woods",
            "Black Pepper",
            "Vetiver"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/issey-miyake/3423474883950_01/issey-miyake-nuit-dissey-profumo-per-uomo___150924.jpg"
        },
        {
          "id": "52",
          "name": "Amor Amor",
          "brand": "Cacharel",
          "description": "A fruity and floral fragrance with a touch of vanilla and musk.",
          "price": 65,
          "fragrances": [
            "Black Currant",
            "Mandarin",
            "Jasmine",
            "Vanilla",
            "Musk"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/cacharel/cacamaw_aedt20_02-o/cacharel-amor-amor-eau-de-toilette-da-donna___130109.jpg"
        },
        {
          "id": "53",
          "name": "Invictus Aqua",
          "brand": "Paco Rabanne",
          "description": "A fresh and aquatic fragrance with marine and citrus notes.",
          "price": 85,
          "fragrances": [
            "Grapefruit",
            "Marine Accord",
            "Violet Leaf",
            "Ambergris"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/paco-rabanne/3349668599110_01-o/rabanne-invictus-platinum-eau-de-parfum-per-uomo___220307.jpg"
        },
        {
          "id": "54",
          "name": "La Petite Robe Noire",
          "brand": "Guerlain",
          "description": "A playful and sophisticated fragrance with notes of black cherry and rose.",
          "price": 120,
          "fragrances": [
            "Black Cherry",
            "Almond",
            "Rose",
            "Tea",
            "Tonka Bean"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/guerlain/3346470114814_01/guerlain-la-petite-robe-noire-eau-de-parfum-da-donna___230328.jpg"
        },
        {
          "id": "55",
          "name": "Armani Code",
          "brand": "Giorgio Armani",
          "description": "A seductive and sophisticated fragrance with notes of lemon and tonka bean.",
          "price": 100,
          "fragrances": [
            "Lemon",
            "Star Anise",
            "Olive Blossom",
            "Tonka Bean",
            "Guaiac Wood"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa0f47fe3/images/hi-res/SKU/SKU_3376/616702_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "56",
          "name": "Joy",
          "brand": "Jean Patou",
          "description": "A rich and luxurious floral fragrance with a bouquet of jasmine and rose.",
          "price": 160,
          "fragrances": [
            "Jasmine",
            "Rose",
            "Ylang-Ylang",
            "Musk"
          ],
          "genre": "femminile",
          "imageUrl": "https://www.casadelprofumo.it/data/tmp/3/0/28510_3.jpg?1692409556_1"
        },
        {
          "id": "57",
          "name": "Homme",
          "brand": "Dior",
          "description": "A woody and floral fragrance with a blend of iris, vetiver, and cedar.",
          "price": 115,
          "fragrances": [
            "Iris",
            "Vetiver",
            "Cedar",
            "Lavender",
            "Amber"
          ],
          "genre": "maschile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/joop/jophomm_aedt10_02-o/joop-homme-eau-de-toilette-per-uomo___121026.jpg"
        },
        {
          "id": "58",
          "name": "Black Opium",
          "brand": "Yves Saint Laurent",
          "description": "A warm and spicy fragrance with a blend of coffee, vanilla, and white flowers.",
          "price": 130,
          "fragrances": [
            "Coffee",
            "Vanilla",
            "White Flowers",
            "Jasmine",
            "Cedar"
          ],
          "genre": "femminile",
          "imageUrl": "https://cdn.notinoimg.com/detail_main_mq/yves-saint-laurent/yslblow_aedp10_02-o/yves-saint-laurent-black-opium-eau-de-parfum-da-donna___141119.jpg"
        },
        {
          "id": "59",
          "name": "1 Million Lucky",
          "brand": "Paco Rabanne",
          "description": "A fresh and vibrant fragrance with notes of hazelnut, honey, and cedar.",
          "price": 95,
          "fragrances": [
            "Hazelnut",
            "Green Plum",
            "Grapefruit",
            "Cedar",
            "Honey"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw564b79cc/images/hi-res/SKU/SKU_3932/654153_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "60",
          "name": "Luna Rossa",
          "brand": "Prada",
          "description": "A fresh and invigorating scent inspired by the world of extreme sailing.",
          "price": 110,
          "fragrances": [
            "Lavender",
            "Bitter Orange",
            "Clary Sage",
            "Mint",
            "Ambergris"
          ],
          "genre": "maschile",
          "imageUrl": "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw27d70355/images/hi-res/SKU/SKU_5585/670441_swatch.jpg?sw=585&sh=585&sm=fit"
        },
        {
          "id": "aaef1097-064f-49ef-899f-72d826cdaf3a",
          "name": "Intense Café",
          "brand": "Montale",
          "description": "A rich and exotic fragrance that combines the aroma of roasted coffee with floral and vanilla notes.",
          "price": 155.00,
          "fragrances": [" Coffee",     "Rose",     "Vanilla",     "Amber",     "White Musk"],
          "genre": "unisex",
          "imageUrl": "https://2.bp.blogspot.com/-dzVh4wK-C9I/VbeVeY9VidI/AAAAAAAACIE/a6pVPScDEfg/s1600/437%2B-%2BMontale%2B-%2BBlack%2BAoud.jpg"
        }
      ]
    };
  };