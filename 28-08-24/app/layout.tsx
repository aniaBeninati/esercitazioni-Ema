import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '@/components/NavBar';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Perfume App',
    description: 'App for managing perfumes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <NavBar />
                    {children}
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
                </AuthProvider>
            </body>
        </html>
    );
}