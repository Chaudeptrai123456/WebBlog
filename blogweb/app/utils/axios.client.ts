"use client";

import axios, { AxiosInstance } from "axios";

type ApiTarget = "BACKEND" | "GATEWAY";

const createAxios = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  // 👉 Handle auth error
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response?.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

// cache instance (tránh tạo lại nhiều lần)
let backendInstance: AxiosInstance | null = null;
let gatewayInstance: AxiosInstance | null = null;

export const apiClient = (target: ApiTarget = "BACKEND") => {
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;

  if (target === "GATEWAY") {
    if (!gatewayURL) throw new Error("Missing NEXT_PUBLIC_GATEWAY_URL");
    if (!gatewayInstance) gatewayInstance = createAxios(gatewayURL);
    return gatewayInstance;
  }

  if (!backendURL) throw new Error("Missing NEXT_PUBLIC_BACKEND_URL");
  if (!backendInstance) backendInstance = createAxios(backendURL);

  return backendInstance;
};
