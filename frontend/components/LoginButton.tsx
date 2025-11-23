"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithGoogle } from "@/lib/aaSdk";
import { useAuth } from "@/context/AuthContext";

type BackendLoginResponse = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken: string;
  country?: string | null;
  isNeededAdditionalInfo: boolean | "true" | "false";
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
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

      const needAdditional = String(userData.isNeededAdditionalInfo) === "true";

      setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        walletAddress: userData.walletAddress,
        accessToken: userData.accessToken,
        country: userData.country ?? undefined,
        isNeededAdditionalInfo: needAdditional,
      });

      console.log("[LoginButton] isNeededCountryInfo(normalized):", needAdditional);

      if (needAdditional) {
        router.push("/onboarding");
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
      <span>{loading ? "로그인 중..." : "로그인하기"}</span>
    </button>
  );
};