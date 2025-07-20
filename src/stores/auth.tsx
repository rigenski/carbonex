"use client";

import { TLoginResponse } from "@/services/auth/types";
import * as React from "react";
import { create } from "zustand";

export type TAuthIsLogin = boolean;

// Extended user type with role field
export type TAuthUser = TLoginResponse["user"] & {
  role?: "community" | "individual";
  name?: string;
};

interface ICreateStoreParams {
  isLogin: TAuthIsLogin;
  accessToken: string;
  user: TAuthUser | null;
}

type ICreateStore = ICreateStoreParams & {
  setIsLogin: (isLogin: boolean) => void;
  setUser: (user: TAuthUser) => void;
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
};

function createStore({ isLogin, accessToken, user }: ICreateStoreParams) {
  return create<ICreateStore>()((set) => ({
    isLogin,
    setIsLogin: (isLogin) => set({ isLogin }),
    accessToken,
    setAccessToken: (accessToken) => set({ accessToken }),
    user,
    setUser: (user) => set({ user }),
    logout: () =>
      set({
        isLogin: false,
        accessToken: "",
        user: null,
      }),
  }));
}

const AuthContext = React.createContext<ReturnType<typeof createStore> | null>(
  null,
);

export function useAuth() {
  if (!AuthContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return React.useContext(AuthContext)!();
}

// Add useAuthStore hook for compatibility with existing components
export function useAuthStore() {
  return useAuth();
}

type IAuthProviderProps = ICreateStoreParams & {
  children: React.ReactNode;
};

export function AuthProvider({
  isLogin,
  accessToken,
  user,
  children,
}: IAuthProviderProps) {
  const [store] = React.useState(() =>
    createStore({ isLogin, accessToken, user }),
  );

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}
