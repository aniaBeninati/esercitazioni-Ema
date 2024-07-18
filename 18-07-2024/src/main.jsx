import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DefaultLayout from "./components/DefaultLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import App from "./App.jsx";
import CocktailPage from "./pages/CocktailPage.jsx";
import Contacts from "./pages/Contacts.jsx";

/* le diverse rotte dell'applicazione */
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cocktail/:id", /* Per la pagina dei dettagli del cocktail */
        element: <CocktailPage />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
