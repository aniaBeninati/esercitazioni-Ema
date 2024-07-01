import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Card from './components/Card';
import Menu from './components/Menu';
import catData from './assets/catData';  
import '@fontsource/rubik';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Menu />
          <div className="card-container">
            {catData.map((cat, index) => (
              <Card key={index} cat={cat} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
