// context/AuthContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken?: string;
  country?: string;
  isNeededAdditionalInfo?: boolean;
};

type AuthContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => void;
  needAdditionalInfo: boolean;
  initializing: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "givechain:user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, _setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  // user 상태 + localStorage 동기화용 래퍼
  const setUser = (u: User | null) => {
    _setUser(u);
    if (typeof window === "undefined") return;

    if (u) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // 앱 시작/새로고침/직접접속 시 user 복구
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as User;
        _setUser(parsed); // 여기서는 localStorage 다시 안 건드려도 됨
      }
    } catch (e) {
      console.error("stored user 복구 실패:", e);
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setInitializing(false);
    }
  }, []);

  const logout = () => {
    setUser(null); // 상태 + localStorage 같이 정리
  };

  const needAdditionalInfo = !!user && user.isNeededAdditionalInfo === true;

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, needAdditionalInfo, initializing }}
    >
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