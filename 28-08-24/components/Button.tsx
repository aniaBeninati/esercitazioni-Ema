import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

const Button = ({ children, loading, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;