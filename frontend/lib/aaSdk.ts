// lib/aaSdk.ts
"use client";

import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string;

const SEPOLIA_RPC_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ||
  "https://1rpc.io/sepolia";

let web3auth: Web3Auth | null = null;

export type LoginResult = {
  provider: string;
  providerUserId: string;
  walletAddress: string;
  email: string;
  name: string;
};

export const initWeb3Auth = async (): Promise<Web3Auth> => {
  if (web3auth) return web3auth;

  const options: any = {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0xaa36a7", // 11155111
      rpcTarget: SEPOLIA_RPC_URL,
      displayName: "Sepolia Testnet",
      ticker: "ETH",
      tickerName: "Ethereum",
      blockExplorer: "https://sepolia.etherscan.io",
    },
  };

  console.log("[Web3Auth] 옵션:", options);

  web3auth = new Web3Auth(options);

  if (typeof (web3auth as any).initModal === "function") {
    await (web3auth as any).initModal();
  } else if (typeof (web3auth as any).init === "function") {
    await (web3auth as any).init();
  }

  console.log("[Web3Auth] 초기화 완료");
  return web3auth;
};

export const loginWithGoogle = async (): Promise<LoginResult> => {
  console.log("[Web3Auth] loginWithGoogle 진입");

  const wa = await initWeb3Auth();

  const provider = await wa.connect();
  console.log("[Web3Auth] provider:", provider);

  if (!provider) {
    throw new Error("지갑 provider를 얻지 못했습니다.");
  }

  const userInfo: any = await wa.getUserInfo();
  console.log("[Web3Auth] userInfo:", userInfo);

  const accounts = (await provider.request({
    method: "eth_accounts",
  })) as string[];

  console.log("[Web3Auth] accounts:", accounts);

  const providerType =
    userInfo.typeOfLogin ??
    userInfo.loginType ??
    "none";

  const providerUserId =
    userInfo.verifierId ??
    userInfo.aggregateVerifierId ??
    userInfo.email ??
    accounts?.[0] ??
    "";

  if (!providerUserId) {
    console.error("[Web3Auth] providerUserId를 얻지 못했습니다.", userInfo);
    throw new Error("providerUserId를 얻지 못했습니다.");
  }

  return {
    provider: providerType,
    providerUserId,
    walletAddress: accounts?.[0] ?? "",
    email: userInfo.email ?? "",
    name: userInfo.name ?? "",
  };
};

export async function disconnectWeb3() {
  try {
    if (web3auth) {
      await web3auth.logout();
    }
  } catch (e) {
    console.error("[disconnectWeb3] Web3 로그아웃 실패:", e);
  }
}

/** 🔹 기부 트랜잭션에서 Web3Auth provider를 가져올 때 사용할 헬퍼 */
export async function getWeb3AuthProvider() {
  const wa = await initWeb3Auth();

  // 기존 세션이 있으면 provider가 이미 존재할 수 있고,
  // 없으면 connect()를 다시 띄워서 로그인 유도
  if (!wa.provider) {
    try {
      const provider = await wa.connect();
      return provider;
    } catch (e) {
      console.error("[getWeb3AuthProvider] connect 실패:", e);
      return null;
    }
  }

  return wa.provider;
}