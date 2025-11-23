// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Donation {
    // 기부가 발생할 때마다 블록체인에 로그를 남김
    event Donated(address indexed donor, uint256 amount, uint256 timestamp);

    // 주소별 총 기부 금액 저장
    mapping(address => uint256) public totalDonations;

    // 기부 함수
    function donate() external payable {
        require(msg.value > 0, "Donation must be > 0");

        totalDonations[msg.sender] += msg.value;

        emit Donated(msg.sender, msg.value, block.timestamp);
    }

    // 조회 함수
    function getTotalDonation(address user) public view returns (uint256) {
        return totalDonations[user];
    }
}