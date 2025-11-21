// components/RequireCountry.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function RequireCountry({ children }: Props) {
  const { needCountryInfo } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!needCountryInfo) return;

    // 메인 영역(/main...)인데 아직 온보딩 페이지가 아니면 → 온보딩으로 이동
    if (pathname.startsWith("/main") && pathname !== "/country-onboarding") {
      router.replace("/country-onboarding");
    }
  }, [needCountryInfo, pathname, router]);

  // 🔒 리다이렉트 중일 때는 화면 깜빡임 방지
  if (
    needCountryInfo &&
    pathname.startsWith("/main") &&
    pathname !== "/country-onboarding"
  ) {
    return null;
  }

  return <>{children}</>;
}