import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[url('/src/assets/header.jpg')] bg-cover bg-center h-48 flex items-center justify-center">
        <NavBar />
      </header>
      <main className="flex-grow bg-[url('/src/assets/img.webp')] bg-cover bg-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
