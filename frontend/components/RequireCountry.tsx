// components/RequireCountry.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function RequireCountry({ children }: Props) {
  const { needAdditionalInfo } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!needAdditionalInfo) return;

    if (pathname.startsWith("/main") && pathname !== "/onboarding") {
      router.replace("/onboarding");
    }
  }, [needAdditionalInfo, pathname, router]);

  if (
    needAdditionalInfo &&
    pathname.startsWith("/main") &&
    pathname !== "/onboarding"
  ) {
    return null;
  }

  return <>{children}</>;
}