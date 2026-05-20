"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, PlusCircle, Users } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: Home },
    { name: "Posts", path: "/admin/posts", icon: FileText },
    { name: "Create", path: "/admin/posts/create", icon: PlusCircle },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Login", path: "/login" },
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
