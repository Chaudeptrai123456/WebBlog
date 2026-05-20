"use client";

import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import RequireRole from "@/app/components/auth/RequireRole";

import Header from "@/app/components/user/Header";
import Footer from "@/app/components/user/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ctx = useContext(UserContext);
  if (!ctx) return <div>Loading...</div>;

  const { user } = ctx;

  return (
    <RequireRole roles={["ROLE_USER", "ROLE_GUEST"]}>
      <div className="flex flex-col min-h-screen bg-black text-white ">
        {/* Header */}
        <Header />
        {/* Content */}
        <main className="flex-1">{children}</main>
        {/* Footer */}
        <Footer />
      </div>
    </RequireRole>
  );
}
