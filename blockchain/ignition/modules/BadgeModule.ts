// ignition/modules/BadgeModule.ts

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BadgeModule = buildModule("BadgeModule", (m) => {
  // ERC1155의 baseURI (나중에 IPFS나 웹 서버로 바꿀 수 있음)
  const baseUri = "https://api.givechain.xyz/metadata/badges/{id}.json";

  const badge = m.contract("BadgeNFT", [baseUri]);

  return { badge };
});

export default BadgeModule;