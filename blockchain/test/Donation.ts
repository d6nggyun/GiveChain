// test/Donation.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Donation", function () {
  it("Should accept donations per campaign and update totals", async function () {
    const [owner, user] = await ethers.getSigners();

    const Donation = await ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();

    const campaignId = 1;

    // owner가 1ETH 기부
    await donation.connect(owner).donate(campaignId, {
      value: ethers.parseEther("1")
    });

    // user가 0.5ETH 기부
    await donation.connect(user).donate(campaignId, {
      value: ethers.parseEther("0.5")
    });

    // owner 기부 총합 검증
    const ownerTotal = await donation.getDonation(campaignId, owner.address);
    expect(ownerTotal).to.equal(ethers.parseEther("1"));

    // user 기부 총합 검증
    const userTotal = await donation.getDonation(campaignId, user.address);
    expect(userTotal).to.equal(ethers.parseEther("0.5"));
  });

  it("Should keep campaign donations separate", async function () {
    const [owner] = await ethers.getSigners();

    const Donation = await ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();

    const campaignA = 1;
    const campaignB = 2;

    // 각각 다른 캠페인에 기부
    await donation.connect(owner).donate(campaignA, {
      value: ethers.parseEther("1")
    });

    await donation.connect(owner).donate(campaignB, {
      value: ethers.parseEther("2")
    });

    // 캠페인 A/B 금액이 서로 분리되어야 함
    const aTotal = await donation.getDonation(campaignA, owner.address);
    const bTotal = await donation.getDonation(campaignB, owner.address);

    expect(aTotal).to.equal(ethers.parseEther("1"));
    expect(bTotal).to.equal(ethers.parseEther("2"));
  });
});