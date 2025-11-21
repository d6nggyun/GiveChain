"use client";

import { useState } from "react";
import { loginWithGoogle } from "@/lib/aaSdk";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type BackendLoginResponse = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken: string;
  isNeededCountryInfo: boolean;
};

export const LoginButton = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("[LoginButton] 클릭됨");
    setLoading(true);

    try {
      const result = await loginWithGoogle();
      console.log("[LoginButton] Web3Auth result:", result);

      const backendResponse = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            provider: result.provider,
            providerMemberId: result.providerUserId,
            email: result.email,
            name: result.name,
            walletAddress: result.walletAddress,
          }),
        }
      );

      if (!backendResponse.ok) {
        const text = await backendResponse.text();
        console.error("[LoginButton] backend error:", text);
        throw new Error("백엔드 로그인 실패");
      }

      const userData: BackendLoginResponse = await backendResponse.json();
      console.log("[LoginButton] backend userData:", userData);

      setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        walletAddress: userData.walletAddress,
        accessToken: userData.accessToken,
      });

      if (userData.isNeededCountryInfo) {
        router.push("/onboarding/country");
      } else {
        router.push("/main");
      }
    } catch (e) {
      console.error("[LoginButton] login error:", e);
      alert("로그인 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="gc-login-button disabled:opacity-60"
      onClick={handleLogin}
      disabled={loading}
    >
      <span className="gc-google-icon">G</span>
      <span>{loading ? "로그인 중..." : "Google로 계속하기"}</span>
    </button>
  );
};