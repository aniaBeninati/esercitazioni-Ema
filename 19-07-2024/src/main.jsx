import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import ProductProvider from './providers/ProductContext';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'cart', element: <Cart /> },
      { path: 'contacts', element: <Contacts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider> {/* Avvolge l'app con il provider del contesto dei prodotti */}
      <RouterProvider router={router} /> {/* Fornisce il router configurato all'app */}
    </ProductProvider>
  </React.StrictMode>
);
