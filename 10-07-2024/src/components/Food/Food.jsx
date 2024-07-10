import React from 'react';
import styles from './food.module.css';

function Food({ ricetta, onClick }) {
  const { id, nome, tipo_di_cucina, difficolta, tempo_di_preparazione, ingredienti_principali, tipo_di_piatto, immagine } = ricetta;

  return (
    <li className={styles.foodCard}>
      <img src={immagine} alt={nome} className={styles.foodImage} />
      <div className={styles.foodDetails}>
      <div className= {styles.central}><h2>{nome}</h2></div>
        <p>Tipo di Cucina: {tipo_di_cucina}</p>
        <p>Difficoltà: {difficolta}</p>
        <p>Tempo di Preparazione: {tempo_di_preparazione}</p>
        <p>Ingredienti Principali: {ingredienti_principali.join(", ")}</p>
        <p>Tipo di Piatto: {tipo_di_piatto}</p>
        <div className= {styles.central}><button id={id} onClick={onClick} className={styles.deleteButton}>Cancella</button>
        </div>
        </div>
    </li>
  );
}

export default Food;