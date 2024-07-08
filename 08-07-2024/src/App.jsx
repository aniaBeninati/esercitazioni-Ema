import React from "react";
import styles from "./app.module.css";
import { useState } from "react";

//definisco un array iniziale di todos
const initialTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Fare la spesa",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Pagare bolletta",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Andare dal meccanico",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Farmacia",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Chiama Pippo",
  },
];

//utilizzo lo stato per gestire la lista dei todos e l'input dell'utente
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");
  
  /**
  * Aggiunge un nuovo todo alla lista
  * @param {Event} e - L'evento di submit del form
  */
  const addTodo = (e) => {
    e.preventDefault(); //previene il comportamento predefinito del form (che farebbe ricaricare la pagina)
    if (!input.length) return; // Verifica se l'input non è vuoto
    
    const id = self.crypto.randomUUID(); // Genero un ID univoco e creo un nuovo todo con il titolo dell'input
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
  };
  
  /**
  * Gestisce il cambiamento del valore dell'input
  * @param {Event} e - L'evento di cambio dell'input
  */
  const handleChange = (e) => {
    setInput(e.target.value); // Aggiorna lo stato dell'input con il nuovo valore
  };
  
  /**
  * Cancella uno specifico todo dalla lista
  * @param {string} id - L'ID del todo da cancellare
  */
  const handleDelete = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };
  
  return (
    <div className={styles.container}>
    <form onSubmit={addTodo}>
    {/* Input per inserire il titolo del nuovo todo e dove inserisco un input di tipo testuale e di tipo submit all'interno del form*/}
    <input
    value={input}
    placeholder="Input"
    onChange={handleChange}
    className={styles.input}
    type={"text"}
    />
    {/* Bottone per aggiungere il nuovo todo */}
    <button type="submit" className={styles.addButton}>
    ADD
    </button>
    </form>
    <div className={styles.container__list}>
    <ul>
    {/* Mappa i todos e crea un elemento della lista per ciascuno */}
    {todos.map((todo) => (
      <li key={todo.id} className={styles.todoItem}>
      {todo.title}
      {/* Ho aggiunto qui il Bottone per cancellare lo specifico todo dalla lista*/}
      <button
      className={styles.deleteButton}
      onClick={() => handleDelete(todo.id)}
      >
      Delete
      </button>
      </li>
    ))}
    </ul>
    </div>
    </div>
  );
}

export default App;
