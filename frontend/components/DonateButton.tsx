// components/DonateButton.tsx
"use client";

import { useState } from "react";
import { donateByWallet } from "@/lib/donation"; // 기존 경로 그대로 사용
import { toast } from "sonner";

export default function DonateButton() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast.error("올바른 금액을 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await donateByWallet(amount);

      toast.success(`🎉 ${amount} ETH 기부가 완료되었습니다! 감사합니다.`);

      setAmount("");
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message ?? "기부 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
      <input
        type="number"
        step="0.001"
        min="0"
        className="w-full sm:w-40 bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF]"
        placeholder="ETH 입력"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="px-6 py-3 rounded-full bg-[#6B8DFF] hover:bg-[#5a7af0] text-white font-semibold shadow-lg transition disabled:opacity-50"
      >
        {loading ? "기부 중..." : "기부하기"}
      </button>
    </div>
  );
}