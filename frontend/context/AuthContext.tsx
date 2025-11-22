"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken?: string;
  country?: string;
  isNeededCountryInfo?: boolean;
};

type AuthContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => void;
  needCountryInfo: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
  };

  const needCountryInfo = !!user && user.isNeededCountryInfo === true;

  return (
    <AuthContext.Provider value={{ user, setUser, logout, needCountryInfo }}>
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