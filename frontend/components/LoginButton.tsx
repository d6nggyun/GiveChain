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
  isNeededCountryInfo: boolean | "true" | "false" | null;
  country?: string | null;
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

      // 🔥 서버에서 온 값을 boolean으로 확실히 정규화
      const isNeeded =
        String(userData.isNeededCountryInfo) === "true";

      // 🔥 Context에 서버 플래그까지 저장
      setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        walletAddress: userData.walletAddress,
        accessToken: userData.accessToken,
        country: userData.country ?? undefined,
        isNeededCountryInfo: isNeeded,
      });

      console.log("[LoginButton] isNeededCountryInfo(normalized):", isNeeded);

      // 🔥 오직 서버 플래그에만 의존해서 라우팅
      if (isNeeded) {
        router.push("/country-onboarding"); // ✅ 실제 파일 경로와 맞춤
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