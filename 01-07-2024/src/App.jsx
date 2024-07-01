import React from 'react';
import './App.css';
import Counter from './components/Counter';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="app">
      <h1 className="title">Welcome to the Fun Counter App!</h1>
      <Counter />
      <RandomNumber />
    </div>
  );
}

export default App;

