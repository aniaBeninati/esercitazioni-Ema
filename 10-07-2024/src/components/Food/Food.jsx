import React from 'react';
import styles from './food.module.css';

function Food({ ricetta, onClick }) {
  const { id, nome, tipo_di_cucina, difficolta, tempo_di_preparazione, ingredienti_principali, tipo_di_piatto, immagine } = ricetta;

  return (
    <li className={styles.foodCard}>
      <img src={immagine} alt={nome} className={styles.foodImage} />
      <div className={styles.foodDetails}>
        <div className={styles.central}><h2>{nome}</h2></div>
        <p><span className={styles.label}>Tipo di Cucina:</span> <span className={styles.value}>{tipo_di_cucina}</span></p>
        <p><span className={styles.label}>Difficoltà:</span> <span className={styles.value}>{difficolta}</span></p>
        <p><span className={styles.label}>Tempo di Preparazione:</span> <span className={styles.value}>{tempo_di_preparazione}</span></p>
        <p><span className={styles.label}>Ingredienti Principali:</span> <span className={styles.value}>{ingredienti_principali.join(", ")}</span></p>
        <p><span className={styles.label}>Tipo di Piatto:</span> <span className={styles.value}>{tipo_di_piatto}</span></p>
        <div className={styles.central}><button id={id} onClick={onClick} className={styles.deleteButton}>Cancella</button></div>
      </div>
    </li>
  );
}

export default Food;
