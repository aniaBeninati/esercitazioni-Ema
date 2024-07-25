import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PerfumeDetailPage from "./pages/PerfumeDetailPage.jsx"; 
import ErrorPage from "./pages/ErrorPage.jsx";
import Create from "./pages/Create.jsx"; 
import Edit from "./pages/Edit.jsx";

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
                element: <Create />, 
            },
            {
                path: "edit/:id",
                element: < Edit/>, 
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
