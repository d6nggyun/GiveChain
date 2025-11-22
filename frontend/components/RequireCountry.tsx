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

    if (pathname.startsWith("/main") && pathname !== "/country-onboarding") {
      router.replace("/country-onboarding");
    }
  }, [needCountryInfo, pathname, router]);

  if (
    needCountryInfo &&
    pathname.startsWith("/main") &&
    pathname !== "/country-onboarding"
  ) {
    return null;
  }

  return <>{children}</>;
}