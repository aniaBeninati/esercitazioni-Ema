import React, { useState } from 'react';

const DecisionMaker = () => {
  // Utilizziamo useState per gestire lo stato della domanda e della risposta
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);

  // Funzione per ottenere una risposta dall'API
  const fetchAnswer = async () => {
    try {
      console.log('Fetching answer...');
      const response = await fetch('https://yesno.wtf/api');
      const data = await response.json();
      console.log('Answer fetched:', data);
      setAnswer(data);
    } catch (error) {
      console.error('Error fetching the answer:', error);
    }
  };

  // Gestisce il clic del pulsante e chiama fetchAnswer
  const handleAskQuestion = () => {
    console.log('Question asked:', question);
    fetchAnswer();
  };

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
