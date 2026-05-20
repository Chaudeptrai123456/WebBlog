"use client";

import { useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";
import RedirectLoading from "@/app/components/loading/RedirectLoading";

export default function Home() {
  const ctx = useContext(UserContext);
  const router = useRouter();
  const params = useSearchParams();

  if (!ctx) return <div>⚠️ Loading...</div>;

  const { user, loading, refetchUser } = ctx;

    //  HANDLE GOOGLE CALLBACK
  useEffect(() => {
    const token = params.get("token");
    if (!token) return;

    localStorage.setItem("token", token);
    console.log("Token stored in localStorage:", token);
    (async () => {
      await refetchUser();
      router.replace("/");
    })();
  }, [params, refetchUser, router]);

  useEffect(() => {
    if (loading) return;
    if (!user) return;

    const redirectPath = localStorage.getItem("redirectAfterLogin");
    if (redirectPath) {
      localStorage.removeItem("redirectAfterLogin");
      router.replace(redirectPath);
      return;
    }

    switch (user.role) {
      case "OWNER":
        router.replace("/owner");
        break;
      case "MANAGER":
        router.replace("/manager");
        break;
      case "ADMIN":
        router.replace("/admin");
        break;
      default:
        console.log("User:", user);
        router.replace("/user");
    }
  }, [user, loading, router]);

  return <RedirectLoading />;
}
