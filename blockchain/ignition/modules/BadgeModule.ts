// ignition/modules/BadgeModule.ts

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BadgeModule = buildModule("BadgeModule", (m) => {
  // ERC1155의 baseURI
  const baseUri = "ipfs://bafybeidechvlfrsqdkdcnsvu4swbzzfwsmoecin5cleuxqdydbqibcxise/";

  const badge = m.contract("BadgeNFT", [baseUri]);

  return { badge };
});

export default BadgeModule;