"use client";

import { Suspense } from "react";
import RequireRole from "@/app/components/auth/RequireRole";
import Background from "@/app/components/user/components/Background";
import Header from "@/app/components/admin/Header";
import Footer from "@/app/components/admin/Footer";
import LuffyGear5 from "@/app/components/user/components/LuffyGear5";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole roles={["ROLE_USER", "ROLE_GUEST"]}>
      <div className="relative min-h-screen text-zinc-200 overflow-y-hidden bg-transparent">
        {" "}
        {/* 🌌 GALAXY BACKGROUND */}
        <Background />
        <LuffyGear5 />
        {/* 🌠 CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* HEADER */}
          <div className="relative z-20">
            <Suspense fallback={<div className="h-[10vh]" />}>
              <Header />
            </Suspense>
          </div>

          {/* MAIN */}
          <main className="flex-1 px-4 md:px-8 py-6">{children}</main>

          {/* FOOTER */}
          <div className="relative z-20">
            <Suspense fallback={<div className="h-[20vh]" />}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </div>
    </RequireRole>
  );
}
