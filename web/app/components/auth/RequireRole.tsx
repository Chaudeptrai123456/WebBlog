"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

export default function RequireRole({
  children,
  roles = [],
  role, // 👈 thêm support role đơn
}: {
  children: React.ReactNode;
  roles?: string[];
  role?: string;
}) {
  const ctx = useContext(UserContext);
  const router = useRouter();

  if (!ctx) return null;

  const { user, loading } = ctx;

  // 👇 merge role + roles
  const finalRoles = role ? [role] : roles;

  useEffect(() => {
    if (loading) return;

    const hasRole =
      finalRoles.length === 0 ||
      finalRoles.some((r) => user.roles?.includes(r));

    if (!hasRole) {
      router.replace("/user");
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;

  const hasRole =
    finalRoles.length === 0 || finalRoles.some((r) => user.roles?.includes(r));

  if (!hasRole) return null;

  return <>{children}</>;
}
