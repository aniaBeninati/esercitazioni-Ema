import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-heart-svgrepo-com.svg';

const menuList = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" }
];
/**
 * Componente per la barra di navigazione
 * @component
 * @returns {JSX.Element} - Ritorna la barra di navigazione con i link di navigazione
 */
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-md">
      <div>
        <h1 className="text-3xl font-bold">Cosmetic Shop</h1>
        <p className="text-sm text-gray-600">Your one-stop shop for all beauty needs</p>
      </div>
      <ul className="flex gap-6 items-center">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="text-pink-700 hover:text-pink-900">
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/cart" className="text-pink-700 hover:text-pink-900 flex items-center">
            <img src={cartIcon} alt="Cart" className="h-6 w-6 mr-1" /> 
            <p>Cart</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
