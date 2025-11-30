// test/BadgeNFT.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("BadgeNFT", function () {
  it("배포되고 기본값이 세팅된다", async function () {
    const [owner] = await ethers.getSigners();

    const BadgeNFT = await ethers.getContractFactory("BadgeNFT");
    const deployed = await BadgeNFT.deploy(
      "https://api.givechain.xyz/metadata/badges/{id}.json"
    );
    await deployed.waitForDeployment();

    const badge = deployed as any; // TS 타입 단순화

    // ✅ uri()는 ERC1155에서 상속됨
    const uri = await badge.uri(1);
    expect(uri).to.equal(
      "https://api.givechain.xyz/metadata/badges/{id}.json"
    );

    // ✅ owner()는 Ownable에서 상속됨
    const ownerAddr = await badge.owner();
    expect(ownerAddr).to.equal(owner.address);
  });

  it("owner만 배지를 민트할 수 있다", async function () {
    const [owner, user] = await ethers.getSigners();

    const BadgeNFT = await ethers.getContractFactory("BadgeNFT");
    const deployed = await BadgeNFT.deploy(
      "https://api.givechain.xyz/metadata/badges/{id}.json"
    );
    await deployed.waitForDeployment();

    const badge = deployed as any;

    // ✅ 여기서는 mint가 아니라 mintBadge 사용
    await badge.mintBadge(user.address, 1);

    // ✅ balanceOf는 ERC1155에서 상속됨
    const balance = await badge.balanceOf(user.address, 1);
    expect(balance).to.equal(1n);

    // ❌ user가 직접 민트 시도 → revert 되어야 함
    await expect(
      badge.connect(user).mintBadge(user.address, 1)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});