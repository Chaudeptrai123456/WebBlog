"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/user" },
    { name: "blog", path: "/blog" },
    { name: "about me", path: "/contact" },
    { name: "login", path: "/login" },
  ];

  return (
    <nav
      className="
      flex flex-col md:flex-row 
      gap-6 
      text-sm uppercase tracking-widest
      items-center
    "
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`
            cursor-pointer transition
            ${
              pathname === item.path
                ? "text-yellow-500"
                : "hover:text-yellow-500"
            }
          `}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
