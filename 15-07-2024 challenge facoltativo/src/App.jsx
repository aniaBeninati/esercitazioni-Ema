import React from 'react';
import AdviceBox from './components/AdviceBox.jsx';
/**
 * Componente principale dell'applicazione
 * @component
 * @returns {JSX.Element} - Ritorna il componente principale dell'app
 */
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-blue">
      <AdviceBox />
    </div>
  );
}

export default App;
