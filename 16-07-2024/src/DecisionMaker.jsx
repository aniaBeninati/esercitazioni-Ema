import React, { useState, useEffect } from 'react';

/**
 * Componente DecisionMaker
 * @component
 * @returns {JSX.Element} - Ritorna il componente DecisionMaker
 */
const DecisionMaker = () => {
  // Utilizzo useState per gestire lo stato della domanda e della risposta
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);

  /**
   * Funzione per ottenere una risposta dall'API
   * @async
   * @function fetchAnswer
   * @returns {Promise<void>}
   */
  const fetchAnswer = async () => {
    try {
      console.log('Fetching answer...');
      // Eseguo una richiesta GET all'API per ottenere una risposta casuale
      const response = await fetch('https://yesno.wtf/api');
      const data = await response.json();
      console.log('Answer fetched:', data);

      // Creo un nuovo oggetto risposta contenente la domanda e la risposta
      const newAnswer = { question, answer: data };
      // Recupero tutte le risposte salvate nel localStorage o inizializzo un array vuoto
      const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
      // Aggiorno l'array di risposte con la nuova risposta
      const updatedAnswers = [...savedAnswers, newAnswer];
      
      // Aggiorno lo stato con la nuova risposta
      setAnswer(data);
      // Salvo l'array di risposte aggiornato nel localStorage
      localStorage.setItem('answers', JSON.stringify(updatedAnswers));
      console.log('Question and answers saved to localStorage');
    } catch (error) {
      console.error('Error fetching the answer:', error);
    }
  };

  /**
   * Gestisco il clic del pulsante e chiamo fetchAnswer
   * @function handleAskQuestion
   */
  const handleAskQuestion = () => {
    console.log('Question asked:', question);
    fetchAnswer();
  };

  /**
   * Effetto per caricare le risposte salvate nel localStorage alla ricostruzione del componente
   * @function useEffect
   */
  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      console.log('Found answers in localStorage:', savedAnswers);
    }
    // Pulizia del localStorage al ricaricamento della pagina
    return () => {
      localStorage.removeItem('answers');
      console.log('Answers removed from localStorage');
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">Decision Maker</h1>
      <p className="text-xl mb-8">Chiedi una domanda e ottieni una risposta sì o no!</p>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="mb-4 p-2 rounded text-black w-3/4 max-w-lg"
        placeholder="Fai una domanda sì/no"
      />
      <button
        onClick={handleAskQuestion}
        className="px-6 py-3 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-900 transition duration-300"
      >
        Ottieni Risposta
      </button>
      {answer && (
        <div className="mt-8 text-center">
          <img src={answer.image} alt={answer.answer} className="rounded-lg shadow-lg mb-4 w-3/4 max-w-md" />
          <p className="text-2xl font-semibold">{answer.answer.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default DecisionMaker;
