// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Donation {
    // 이벤트
    event Donated(
        uint256 indexed campaignId,
        address indexed donor,
        uint256 amount,
        uint256 timestamp
    );

    // 캠페인 → (유저 → 기부액)
    mapping(uint256 => mapping(address => uint256)) public donationByCampaign;

    // 캠페인별 총 기부액
    mapping(uint256 => uint256) public totalFundByCampaign;

    // 기부 함수 : campaignId 포함
    function donate(uint256 campaignId) external payable {
        require(msg.value > 0, "Donation must be > 0");

        donationByCampaign[campaignId][msg.sender] += msg.value;
        totalFundByCampaign[campaignId] += msg.value;

        emit Donated(campaignId, msg.sender, msg.value, block.timestamp);
    }

    // 특정 캠페인에서 특정 유저의 총 기부액 조회
    function getDonation(uint256 campaignId, address user) external view returns (uint256) {
        return donationByCampaign[campaignId][user];
    }

    // 특정 캠페인의 총 기부액 조회
    function getTotalDonationByCampaign(uint256 campaignId) external view returns (uint256) {
        return totalFundByCampaign[campaignId];
    }
}