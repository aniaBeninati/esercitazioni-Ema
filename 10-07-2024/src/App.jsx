import React, { useState } from 'react';
import styles from "./app.module.css";
import Layout from './components/Layout/Layout.jsx';
import Food from './components/Food/Food.jsx';

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
  }
];

const initialInput = {
  nome: "",
  tipo_di_cucina: "",
  difficolta: "",
  tempo_di_preparazione: "",
  ingredienti_principali: "",
  tipo_di_piatto: "",
  immagine: ""
};

function App() {
  const [ricette, setRicette] = useState(initialState);
  const [input, setInput] = useState(initialInput);
  const [filter, setFilter] = useState({
    tipo_di_cucina: "",
    difficolta: "",
    tempo_di_preparazione: "",
    tipo_di_piatto: ""
  });

  const handleDelete = (e) => {
    const tmpRicette = ricette.filter((ricetta) => ricetta.id !== e.target.id);
    setRicette(tmpRicette);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = self.crypto.randomUUID();
    const nuovaRicetta = {
      id,
      nome: input.nome,
      tipo_di_cucina: input.tipo_di_cucina,
      difficolta: input.difficolta,
      tempo_di_preparazione: input.tempo_di_preparazione,
      ingredienti_principali: input.ingredienti_principali.split(",").map(ingrediente => ingrediente.trim()),
      tipo_di_piatto: input.tipo_di_piatto,
      immagine: input.immagine
    };
    setRicette([...ricette, nuovaRicetta]);
    setInput(initialInput);
  };

  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleFilter = (e) => {
    setFilter((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const filteredRicette = ricette.filter((ricetta) => {
    return (
      (!filter.tipo_di_cucina || ricetta.tipo_di_cucina === filter.tipo_di_cucina) &&
      (!filter.difficolta || ricetta.difficolta === filter.difficolta) &&
      (!filter.tempo_di_preparazione || ricetta.tempo_di_preparazione === filter.tempo_di_preparazione) &&
      (!filter.tipo_di_piatto || ricetta.tipo_di_piatto === filter.tipo_di_piatto)
    );
  });

  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Nome</label>
            <input
              id="nome"
              placeholder="Inserire nome"
              value={input.nome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tipo di Cucina</label>
            <input
              id="tipo_di_cucina"
              placeholder="Inserire tipo di cucina"
              value={input.tipo_di_cucina}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Difficoltà</label>
            <input
              id="difficolta"
              placeholder="Inserire difficoltà"
              value={input.difficolta}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tempo di Preparazione</label>
            <input
              id="tempo_di_preparazione"
              placeholder="Inserire tempo di preparazione"
              value={input.tempo_di_preparazione}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Ingredienti Principali (separati da virgola)</label>
            <input
              id="ingredienti_principali"
              placeholder="Inserire ingredienti principali"
              value={input.ingredienti_principali}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tipo di Piatto</label>
            <input
              id="tipo_di_piatto"
              placeholder="Inserire tipo di piatto"
              value={input.tipo_di_piatto}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>URL Immagine</label>
            <input
              id="immagine"
              placeholder="Inserire URL immagine"
              value={input.immagine}
              onChange={handleChange}
            />
          </div>
          <div className= {styles.central}>
          <button type="submit">Aggiungi Ricetta</button>
          </div>
        </form>

        <div className={styles.filterGroup}>
          <select id="tipo_di_cucina" onChange={handleFilter}>
            <option value="">Tutte le Cucine</option>
            <option value="italiana">Italiana</option>
            <option value="messicana">Messicana</option>
            <option value="giapponese">Giapponese</option>
          </select>
          <select id="difficolta" onChange={handleFilter}>
            <option value="">Tutte le Difficoltà</option>
            <option value="facile">Facile</option>
            <option value="media">Media</option>
            <option value="difficile">Difficile</option>
          </select>
          <select id="tempo_di_preparazione" onChange={handleFilter}>
            <option value="">Tutti i Tempi di Preparazione</option>
            <option value="10 minuti">10 minuti</option>
            <option value="20 minuti">20 minuti</option>
            <option value="30 minuti">30 minuti</option>
            <option value="45 minuti">45 minuti</option>
            <option value="1 ora">1 ora</option>
          </select>
          <select id="tipo_di_piatto" onChange={handleFilter}>
            <option value="">Tutti i Tipi di Piatto</option>
            <option value="antipasto">Antipasto</option>
            <option value="primo">Primo</option>
            <option value="secondo">Secondo</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <ul>
          {filteredRicette.map((ricetta) => (
            <Food key={ricetta.id} ricetta={ricetta} onClick={handleDelete} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default App;
