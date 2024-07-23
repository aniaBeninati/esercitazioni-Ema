import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PerfumeDetailPage from "./pages/PerfumeDetailPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "perfumes/:id",
                element: <PerfumeDetailPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
