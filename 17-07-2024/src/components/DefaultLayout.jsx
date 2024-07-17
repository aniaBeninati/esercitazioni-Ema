import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

/**
 * Componente di layout predefinito per l'applicazione
 * @component
 * @returns {JSX.Element} - Ritorna il layout predefinito con NavBar, Outlet e Footer
 */
function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
