/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#1D4ED8',
        accent: '#10B981',
        background: '#F9FAFB',
        textPrimary: '#111827',
        textSecondary: '#6B7280',
      },
    },
  },
  plugins: [],
};