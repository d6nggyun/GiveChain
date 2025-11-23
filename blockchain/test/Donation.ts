// test/Donation.ts

import { expect } from "chai";
import { ethers } from "hardhat";

describe("Donation", function () {
  it("Should accept donations and update totals", async function () {
    const [owner, user] = await ethers.getSigners();

    const Donation = await ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();

    await donation.donate({ value: ethers.parseEther("1") });

    const total = await donation.totalDonations(owner.address);
    expect(total).to.equal(ethers.parseEther("1"));
  });
});