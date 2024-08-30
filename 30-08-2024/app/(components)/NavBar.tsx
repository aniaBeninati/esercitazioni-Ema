"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", value: "Home" },
  { path: "/players", value: "Calciatori" },
  { path: "/about", value: "About" },
  { path: "/contatti", value: "Contatti" },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-black p-4 text-white shadow-lg">
      <ul className="flex gap-8 justify-center">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`transition-all duration-300 ease-in-out ${
              pathname === item.path
                ? "border-b-2 border-white"
                : "hover:text-pink-300"
            }`}
          >
            <Link href={item.path}>
              <span className="text-lg font-semibold">
                {item.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;