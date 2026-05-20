"use client";
import { UserProvider } from "@/app/context/UserContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
