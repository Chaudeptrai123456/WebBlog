"use client";

import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { apiClient } from "@/app/utils/axios.client";
import { API_PATHS } from "@/app/utils/apiPaths";

type User = any;

interface UserContextType {
  user: User; 
  loading: boolean;
  updateUser: (userData: User) => void;
  clearUser: () => void;
  refetchUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

const backendApi = apiClient("BACKEND");

// ✅ GUEST USER chuẩn
const GUEST_USER: User = {
  id: "guest",
  name: "Guest",
  roles: ["ROLE_GUEST"],
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(GUEST_USER);
  const [loading, setLoading] = useState(true);

  function getCookie(name: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
    return undefined;
  }

  const refetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(GUEST_USER);
        return;
      }
      console.log("Fetching user profile with token:", token);
      console.log("API Path for profile:", API_PATHS.AUTH.GET_PROFILE);
      const res = await backendApi.get(API_PATHS.AUTH.GET_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User profile response:", res.data);
      setUser({
        ...res.data,
        token,
      });
    } catch (err) {
      setUser(GUEST_USER);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetchUser();
  }, []);

  const updateUser = useCallback((userData: User) => {
    setUser(userData);
  }, []);

  const clearUser = useCallback(async () => {
    try {
      window.location.href = "http://localhost:9999/logout";
    } catch {}
    setUser(GUEST_USER);  
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, updateUser, clearUser, refetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
