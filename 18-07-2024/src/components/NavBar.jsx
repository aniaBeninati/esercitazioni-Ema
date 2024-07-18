import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const menuList = [
  { name: "Home", path: "/" },
  { name: "Contacts", path: "/contacts" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-black bg-opacity-50 w-full">
      <img src={logo} alt="Logo" className="h-20"/>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold underline text-white" : "text-white")}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
