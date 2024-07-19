import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../providers/ProductContext';
import logo from '../assets/logo.png';

const menuList = [
  { name: 'Home', path: '/' },
  { name: 'Cart', path: '/cart' },
  { name: 'Contacts', path: '/contacts' },
];

const NavBar = () => {
  const products = useContext(ProductContext);

  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-900 text-white">
      <div className="flex items-center flex-1">
        <img src={logo} alt="Vinili Rap Shop Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold">Vinili Rap Shop</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-8">
          {menuList.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? 'underline' : '')}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center flex-1 justify-end">
        <span>{products.length}</span>
        <img src="/cart-icon.svg" alt="Cart" className="w-6 h-6 ml-2" />
      </div>
    </nav>
  );
};

export default NavBar;
