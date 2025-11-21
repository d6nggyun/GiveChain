"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken?: string;
  country?: string;
  // 🔥 서버 플래그: 나라 정보가 필요한지 여부
  isNeededCountryInfo?: boolean;
};

type AuthContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => void;
  // 메뉴/가드에서 쓸 플래그 (오직 서버 값 기반)
  needCountryInfo: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
  };

  // ✅ 오직 서버 플래그에만 의존해서 판단
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