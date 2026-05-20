import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-[10vh]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 md:px-6">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex ">
          <Navbar />
        </div>
        <div className="ml-auto md:hidden cursor-pointer">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
        <div
          className={`
              absolute top-[10vh] left-0 w-full px-4 bg-black text-white flex flex-col items-center gap-6 py-10  md:hidden z-50 transform transition-all duration-300
            ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }
          `}
        >
          <Navbar />
        </div>
      </div>
    </section>
  );
}
