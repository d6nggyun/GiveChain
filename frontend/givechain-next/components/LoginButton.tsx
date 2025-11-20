"use client";

import { loginWithGoogle } from "@/lib/aaSdk";
import { useAuth } from "@/hooks/useAuth";

type BackendLoginResponse = {
  id: number;
  name: string;
  email: string;
  walletAddress: string;
  accessToken: string;
};

export const LoginButton = () => {
  const { setUser } = useAuth();

  const handleLogin = async () => {
    console.log("[LoginButton] 클릭됨");

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
            walletAddress: result.walletAddress
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
    } catch (e) {
      console.error("[LoginButton] login error:", e);
      alert("로그인 중 오류가 발생했습니다. 콘솔을 확인해 주세요.");
    }
  };

  return (
    <button className="gc-login-button" onClick={handleLogin}>
      <span className="gc-google-icon">G</span>
      <span>Google로 계속하기</span>
    </button>
  );
};