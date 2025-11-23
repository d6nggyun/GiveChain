// ignition/modules/DonationModule.ts

// Hardhat Ignition을 이용해서 스마트 컨트랙트 배포하는 모듈
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DonationModule = buildModule("DonationModule", (m) => {
  const donation = m.contract("Donation");
  return { donation };
});

export default DonationModule;