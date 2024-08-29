"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", value: "Home" },
  { path: "/characters", value: "Personaggi" },
  { path: "/about", value: "About" },
  { path: "/contatti", value: "Contatti" },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-blue-700 to-pink-600 p-4 text-white shadow-lg">
      <ul className="flex gap-8 justify-center">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`transition-all duration-300 ease-in-out ${
              pathname === item.path
                ? "border-b-2 border-white"
                : "hover:opacity-80"
            }`}
          >
            <Link href={item.path}>
              <span className="text-lg font-semibold text-white">{item.value}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
