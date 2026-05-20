"use client";

import { UserProvider } from "@/app/context/UserContext";
import Header from "../components/user/Header";
import Background from "@/app/components/user/components/Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="relative min-h-screen">
        {/* 🌌 ONLY 1 BACKGROUND */}
        <Background />

        {/* UI LAYER */}
        <div className="relative z-10 text-white">
          <Header />
          {children}
        </div>
      </div>
    </UserProvider>
  );
}
