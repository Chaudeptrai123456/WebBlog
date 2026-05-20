"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

export default function RequireRole({
  children,
  roles = [],
  role,
}: {
  children: React.ReactNode;
  roles?: string[];
  role?: string;
}) {
  const ctx = useContext(UserContext);
  const router = useRouter();

  if (!ctx) return null;

  const { user, loading } = ctx;

  const finalRoles = role ? [role] : roles;

  const userRoles = user?.roles?.length ? user.roles : ["ROLE_GUEST"];

  const hasRole =
    finalRoles.length === 0 || finalRoles.some((r) => userRoles.includes(r));

  useEffect(() => {
    if (loading) return;

    if (!hasRole) {
      router.replace("/user");
    }
  }, [loading, hasRole, router]);

  // if (loading) return <div>Loading...</div>;

  if (!hasRole) return null;

  return <>{children}</>;
}
