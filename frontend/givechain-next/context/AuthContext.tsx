"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
  walletAddress: string;
};

type AuthContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth는 AuthProvider 내부에서만 사용해야 합니다.");
  }
  return ctx;
};