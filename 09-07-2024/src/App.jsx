import React from "react";
import styles from "./app.module.css";
import { useState } from "react";
import Piante from "./components/Piante.jsx";

const initialState = [
  {
    id: self.crypto.randomUUID(),
    nome: "Sansevieria",
    tipologia: "piante verdi",
    necessita_di_luce: "bassa",
    frequenza_di_annaffiatura: "bassa",
    difficolta_di_cura: "bassa",
    benefici: ["purifica l'aria", "estetica"],
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Aloe Vera",
    tipologia: "succulente",
    necessita_di_luce: "alta",
    frequenza_di_annaffiatura: "bassa",
    difficolta_di_cura: "bassa",
    benefici: ["cura delle ferite", "estetica"],
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Orchidea",
    tipologia: "piante fiorite",
    necessita_di_luce: "media",
    frequenza_di_annaffiatura: "media",
    difficolta_di_cura: "media",
    benefici: ["estetica"],
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Ficus Elastica",
    tipologia: "piante verdi",
    necessita_di_luce: "media",
    frequenza_di_annaffiatura: "media",
    difficolta_di_cura: "media",
    benefici: ["purifica l'aria", "estetica"],
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Cactus",
    tipologia: "succulente",
    necessita_di_luce: "alta",
    frequenza_di_annaffiatura: "bassa",
    difficolta_di_cura: "bassa",
    benefici: ["estetica"],
  },
  {
    id: self.crypto.randomUUID(),
    nome: "Pothos",
    tipologia: "piante verdi",
    necessita_di_luce: "bassa",
    frequenza_di_annaffiatura: "media",
    difficolta_di_cura: "bassa",
    benefici: ["purifica l'aria", "estetica"],
  },
];

const initialInput = {
  nome: "",
  tipologia: "",
  necessita_di_luce: "",
  frequenza_di_annaffiatura: "",
  difficolta_di_cura: "",
  benefici: "",
};

/**
 * Componente principale dell'applicazione
 * @component
 */ function App() {
  const [piante, setPiante] = useState(initialState); // Stato per le piante
  const [input, setInput] = useState(initialInput); // Stato per l'input del form
  const [filter, setFilter] = useState({
    tipologia: "",
    necessita_di_luce: "",
    frequenza_di_annaffiatura: "",
    difficolta_di_cura: "",
  }); // Stato per i filtri

  /**
   * Funzione per gestire l'eliminazione di una pianta
   * @param {Event} e - L'evento del click sul pulsante di eliminazione
   */
  const handleDelete = (e) => {
    const tmpPiante = piante.filter((pianta) => pianta.id !== e.target.id); // Filtra le piante per escludere quella con l'ID corrispondente
    setPiante(tmpPiante); // Aggiorna lo stato delle piante
  };

  /**
   * Funzione per gestire l'invio del form
   * @param {Event} e - L'evento di submit del form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = self.crypto.randomUUID(); // Genera un ID unico per la nuova pianta
    const nuovaPianta = {
      id,
      nome: input.nome,
      tipologia: input.tipologia,
      necessita_di_luce: input.necessita_di_luce,
      frequenza_di_annaffiatura: input.frequenza_di_annaffiatura,
      difficolta_di_cura: input.difficolta_di_cura,
      benefici: input.benefici.split(",").map((beneficio) => beneficio.trim()),
    }; // Divide i benefici in un array
    setPiante([...piante, nuovaPianta]); // Aggiunge la nuova pianta all'array di piante
    setInput(initialInput); // Resetta l'input del form
  };

  /**
   * Funzione per gestire il cambiamento di valore negli input del form
   * @param {Event} e - L'evento di cambiamento dell'input
   */
  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }; // Aggiorna lo stato del filtro con il nuovo valore
    });
  };

  /**
   * Funzione per gestire il cambiamento dei filtri
   * @param {Event} e - L'evento di cambiamento del filtro
   */
  const handleFilter = (e) => {
    setFilter((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }; // Aggiorna lo stato dell'input con il nuovo valore
    });
  };

  // Filtra le piante in base ai filtri applicati
  const filteredPiante = piante.filter((pianta) => {
    return (
      (!filter.tipologia || pianta.tipologia === filter.tipologia) &&
      (!filter.necessita_di_luce ||
        pianta.necessita_di_luce === filter.necessita_di_luce) &&
      (!filter.frequenza_di_annaffiatura ||
        pianta.frequenza_di_annaffiatura ===
          filter.frequenza_di_annaffiatura) &&
      (!filter.difficolta_di_cura ||
        pianta.difficolta_di_cura === filter.difficolta_di_cura)
    );
  });

  return (
    <div className={styles.container}>
      <h1>Catalogo delle Piante</h1>
      <p className={styles.intro}>
        Scopri le migliori piante da appartamento e impara come prendertene
        cura!
      </p>
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
          <label>Tipologia</label>
          <input
            id="tipologia"
            placeholder="Inserire tipologia"
            value={input.tipologia}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Necessità di Luce</label>
          <input
            id="necessita_di_luce"
            placeholder="Inserire necessità di luce"
            value={input.necessita_di_luce}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Frequenza di Annaffiatura</label>
          <input
            id="frequenza_di_annaffiatura"
            placeholder="Inserire frequenza di annaffiatura"
            value={input.frequenza_di_annaffiatura}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Difficoltà di Cura</label>
          <input
            id="difficolta_di_cura"
            placeholder="Inserire difficoltà di cura"
            value={input.difficolta_di_cura}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Benefici (separati da virgola)</label>
          <input
            id="benefici"
            placeholder="Inserire benefici"
            value={input.benefici}
            onChange={handleChange}
          />
        </div>
        <div className={styles.centeredButton}>
          <button type="submit">Aggiungi Pianta</button>
        </div>
      </form>

      <div className={styles.filterGroup}>
        <select id="tipologia" onChange={handleFilter}>
          <option value="">Tutte le Tipologie</option>
          <option value="succulente">Succulente</option>
          <option value="piante fiorite">Piante Fiorite</option>
          <option value="piante verdi">Piante Verdi</option>
        </select>
        <select id="necessita_di_luce" onChange={handleFilter}>
          <option value="">Tutte le Necessità di Luce</option>
          <option value="bassa">Bassa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <select id="frequenza_di_annaffiatura" onChange={handleFilter}>
          <option value="">Tutte le Frequenze di Annaffiatura</option>
          <option value="bassa">Bassa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <select id="difficolta_di_cura" onChange={handleFilter}>
          <option value="">Tutte le Difficoltà di Cura</option>
          <option value="bassa">Bassa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <ul>
        {filteredPiante.map((pianta) => (
          <Piante key={pianta.id} pianta={pianta} onClick={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;
