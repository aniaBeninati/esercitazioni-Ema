const initialState = [
  {
    id: self.crypto.randomUUID(),
    nome: "Spaghetti alla Carbonara",
    tipo_di_cucina: "italiana",
    difficolta: "media",
    tempo_di_preparazione: "30 minuti",
    ingredienti_principali: ["spaghetti", "uova", "guanciale", "pecorino romano", "pepe nero"],
    tipo_di_piatto: "primo",
    immagine: "https://buenavibra.es/wp-content/uploads/2017/08/spaghetti-carbonara-tradicional-portada-1.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Tacos",
    tipo_di_cucina: "messicana",
    difficolta: "facile",
    tempo_di_preparazione: "20 minuti",
    ingredienti_principali: ["tortilla", "carne", "pomodori", "cipolla", "cilantro"],
    tipo_di_piatto: "secondo",
    immagine: "https://www.cuisinart.com/globalassets/catalog/appliances/food-processors/complete-chef-cooking-food-processor/tacosamericanos_ss1262600101.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Sushi",
    tipo_di_cucina: "giapponese",
    difficolta: "difficile",
    tempo_di_preparazione: "1 ora",
    ingredienti_principali: ["riso", "pesce", "alga nori", "aceto di riso"],
    tipo_di_piatto: "secondo",
    immagine: "https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/10/GettyImages-560787803.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Bruschetta",
    tipo_di_cucina: "italiana",
    difficolta: "facile",
    tempo_di_preparazione: "10 minuti",
    ingredienti_principali: ["pane", "pomodori", "aglio", "olio d'oliva", "basilico"],
    tipo_di_piatto: "antipasto",
    immagine: "https://assets.afcdn.com/recipe/20170112/42222_w1944h1242c1cx1500cy1000.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Guacamole",
    tipo_di_cucina: "messicana",
    difficolta: "facile",
    tempo_di_preparazione: "15 minuti",
    ingredienti_principali: ["avocado", "lime", "cipolla", "pomodori", "cilantro"],
    tipo_di_piatto: "antipasto",
    immagine: "https://assets.afcdn.com/recipe/20181123/84182_w1944h1242c1cx2592cy1728.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Ramen",
    tipo_di_cucina: "giapponese",
    difficolta: "media",
    tempo_di_preparazione: "45 minuti",
    ingredienti_principali: ["noodles", "brodo", "uova", "maiale", "cipolla verde"],
    tipo_di_piatto: "primo",
    immagine: "https://uploads.lebonbon.fr/source/2022/november/2038587/ramen-couv_2_1200.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Tiramisù",
    tipo_di_cucina: "italiana",
    difficolta: "media",
    tempo_di_preparazione: "30 minuti",
    ingredienti_principali: ["savoiardi", "caffè", "mascarpone", "uova", "cacao"],
    tipo_di_piatto: "dessert",
    immagine: "https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Churros",
    tipo_di_cucina: "messicana",
    difficolta: "facile",
    tempo_di_preparazione: "20 minuti",
    ingredienti_principali: ["farina", "zucchero", "burro", "uova", "cannella"],
    tipo_di_piatto: "dessert",
    immagine: "https://www.jjsnackfoodservice.com/wp-content/uploads/2019/11/10INCHCHURRO_06_lg.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Tempura",
    tipo_di_cucina: "giapponese",
    difficolta: "media",
    tempo_di_preparazione: "30 minuti",
    ingredienti_principali: ["gamberi", "verdure", "farina", "acqua frizzante", "olio"],
    tipo_di_piatto: "secondo",
    immagine: "https://learntocook.com/wp-content/uploads/2013/12/491326455-1024x683.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Paella",
    tipo_di_cucina: "spagnola",
    difficolta: "media",
    tempo_di_preparazione: "1 ora",
    ingredienti_principali: ["riso", "pollo", "gamberi", "piselli", "pomodori", "peperoni"],
    tipo_di_piatto: "secondo",
    immagine: "https://example.com/paella.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Falafel",
    tipo_di_cucina: "mediorientale",
    difficolta: "facile",
    tempo_di_preparazione: "30 minuti",
    ingredienti_principali: ["ceci", "cipolla", "aglio", "cumino", "prezzemolo"],
    tipo_di_piatto: "antipasto",
    immagine: "https://example.com/falafel.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Croque Monsieur",
    tipo_di_cucina: "francese",
    difficolta: "facile",
    tempo_di_preparazione: "20 minuti",
    ingredienti_principali: ["pane", "prosciutto", "formaggio", "besciamella"],
    tipo_di_piatto: "secondo",
    immagine: "https://example.com/croque_monsieur.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Pad Thai",
    tipo_di_cucina: "tailandese",
    difficolta: "media",
    tempo_di_preparazione: "40 minuti",
    ingredienti_principali: ["noodles", "gamberi", "uova", "arachidi", "tofu", "lime"],
    tipo_di_piatto: "primo",
    immagine: "https://example.com/pad_thai.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Curry di Pollo",
    tipo_di_cucina: "indiana",
    difficolta: "media",
    tempo_di_preparazione: "50 minuti",
    ingredienti_principali: ["pollo", "latte di cocco", "pomodori", "cipolla", "spezie"],
    tipo_di_piatto: "secondo",
    immagine: "https://example.com/curry_pollo.jpg"
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Baklava",
    tipo_di_cucina: "mediorientale",
    difficolta: "difficile",
    tempo_di_preparazione: "1 ora",
    ingredienti_principali: ["pasta fillo", "noci", "miele", "burro"],
    tipo_di_piatto: "dessert",
    immagine: "https://example.com/baklava.jpg"
  }
];
