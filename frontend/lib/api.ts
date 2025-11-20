export const logoutRequest = async () => {
  const res = await fetch("http://localhost:8080/api/auth/logout", {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    console.error("[logout] 서버 로그아웃 실패:", await res.text());
    throw new Error("서버 로그아웃 실패");
  }
};