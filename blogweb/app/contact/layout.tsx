"use client";

import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import RequireRole from "@/app/components/auth/RequireRole";

import Header from "@/app/components/user/Header";
import Footer from "@/app/components/user/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ctx = useContext(UserContext);
  if (!ctx) return <div>Loading...</div>;

  return (
    <RequireRole roles={["ROLE_USER", "ROLE_GUEST"]}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-zinc-200 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-10 blur-[120px]" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[120px]" />
        </div>

        <Header />

        <main className="flex-1 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] ">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </RequireRole>
  );
}
