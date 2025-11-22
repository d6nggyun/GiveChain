import type { RankingResponse } from "./rankingTypes";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const logoutRequest = async () => {
  const res = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    console.error("[logout] 서버 로그아웃 실패:", await res.text());
    throw new Error("서버 로그아웃 실패");
  }
};

export async function fetchRankings(): Promise<RankingResponse> {
  const res = await fetch(`${BASE_URL}/api/rankings`, {
    method: "GET",
    credentials: "include", // 쿠키(accessToken) 보내기
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("[fetchRankings] backend error:", text);
    throw new Error("랭킹 데이터를 불러오지 못했습니다.");
  }

  return res.json();
}

export async function fetchCountryRankings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rankings/country`, {
    method: "GET",
    credentials: "include",
  });

  if (res.status === 401) {
    throw new Error("로그인이 필요합니다.");
  }

  if (!res.ok) {
    throw new Error("국가 랭킹 조회 실패");
  }

  return res.json();
}