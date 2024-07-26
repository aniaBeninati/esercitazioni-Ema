import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseconfig.js";
import "./index.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Protected } from "./pages/Protected";
import AuthContext from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PerfumeDetailPage from "./pages/PerfumeDetailPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Create from "./pages/Create.jsx";
import Edit from "./pages/Edit.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Inizializza Firebase
initializeApp(firebaseConfig);

// Configura il router
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <Protected>
                        <App />
                    </Protected>
                ),
            },
            {
                path: "signin",
                element: <SignIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
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
                element: <Edit />,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContext>
            <RouterProvider router={router} />
        </AuthContext>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </React.StrictMode>
);
