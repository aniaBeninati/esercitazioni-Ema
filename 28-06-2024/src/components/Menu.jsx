import React from 'react';
import '../styles/menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Menu;
