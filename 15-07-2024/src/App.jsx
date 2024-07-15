import React, { useState } from 'react';
import PostComponent from './PostComponent';
/**
 * Componente principale dell'applicazione
 * @component
 * @returns {JSX.Element} - Ritorna il componente principale dell'applicazione
 */
const App = () => {
  const [counter, setCounter] = useState(1);
  /**
   * Incrementa il contatore del post
   */
  const incrementCounter = () => setCounter((prev) => prev + 1);
  /**
   * Decrementa il contatore del post, ma non scende sotto 1
   */
  const decrementCounter = () => setCounter((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500 p-4">
      <div className="mb-8 flex space-x-4">
        <button
          onClick={decrementCounter}
          className="bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transform hover:bg-blue-600 hover:scale-105 transition"
        >
          Previous
        </button>
        <button
          onClick={incrementCounter}
          className="bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transform hover:bg-blue-600 hover:scale-105 transition"
        >
          Next
        </button>
      </div>
      <PostComponent postId={counter} />
    </div>
  );
};

export default App;
