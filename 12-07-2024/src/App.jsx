import React from 'react';
import EquilibriumCard from './components/EquilibriumCard';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-very-dark-blue-main-bg">
      <div className="bg-darker-blue p-6 rounded-2xl">
        <EquilibriumCard />
      </div>
    </div>
  );
};

export default App;
