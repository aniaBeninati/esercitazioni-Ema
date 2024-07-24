import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PerfumeDetailPage from "./pages/PerfumeDetailPage.jsx"; // Assicurati che il percorso sia corretto
import ErrorPage from "./pages/ErrorPage.jsx";
import Create from "./pages/Create.jsx"; // Assicurati di importare il componente Create

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
                path: "perfumes/:id",
                element: <PerfumeDetailPage />,
            },
            {
                path: "create",
                element: <Create />, // Aggiungi la rotta per la pagina Create
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
