// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title GiveChain Badge NFT
 * @dev 배지용 ERC1155 + Soulbound(양도 불가)
 * - tokenId마다 다른 배지 타입
 * - owner(백엔드 지갑 등)만 mint 가능
 */
contract BadgeNFT is ERC1155, Ownable {
    using Strings for uint256;

    // 배지 메타정보 저장용 (선택 사항, 안 써도 됨)
    struct BadgeInfo {
        string name;
        string description;
    }

    // tokenId => BadgeInfo
    mapping(uint256 => BadgeInfo) public badges;

    // address => tokenId => 보유 여부(1 이상이면 true지만, 명시적으로 한 번 체크용)
    mapping(address => mapping(uint256 => bool)) public hasBadge;

    /**
     * @param baseUri 예: "ipfs://Qm.../"  (뒤에 슬래시 포함)
     *
     * 실제 최종 URI는 아래 uri() 오버라이드에서
     *   baseUri + tokenId + ".json"
     * 형태로 반환됨.
     * 예: "ipfs://Qm.../1.json"
     */
    constructor(string memory baseUri)
        ERC1155(baseUri) // super.uri(id) 가 baseUri 를 반환
        Ownable(msg.sender)
    {}

    // -----------------------------
    // 🔹 ERC1155 메타데이터 URI 오버라이드
    // -----------------------------
    function uri(uint256 id) public view override returns (string memory) {
        // super.uri(id) => constructor 에 넣은 baseUri (예: "ipfs://CID/")
        // 최종: "ipfs://CID/1.json", "ipfs://CID/2.json" ...
        return string(abi.encodePacked(super.uri(id), id.toString(), ".json"));
    }

    // -----------------------------
    // 🔹 배지 메타 설정 (관리자용)
    // -----------------------------
    function setBadgeInfo(
        uint256 tokenId,
        string calldata name,
        string calldata description
    ) external onlyOwner {
        badges[tokenId] = BadgeInfo(name, description);
    }

    // -----------------------------
    // 🔹 배지 지급 (관리자/백엔드 지갑만)
    // -----------------------------
    function mintBadge(address to, uint256 tokenId) external onlyOwner {
        // 이미 가지고 있다면 또 줄 건지 말 건지는 정책에 따라 다름
        // 대부분은 "한 번만" 주는게 맞을테니 막아두자.
        require(!hasBadge[to][tokenId], "Already has this badge");

        hasBadge[to][tokenId] = true;
        _mint(to, tokenId, 1, "");
    }

    // 여러 개 한 번에 줄 때
    function mintBatchBadges(
        address to,
        uint256[] calldata tokenIds
    ) external onlyOwner {
        uint256[] memory amounts = new uint256[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(!hasBadge[to][tokenIds[i]], "Already has one of badges");
            hasBadge[to][tokenIds[i]] = true;
            amounts[i] = 1;
        }

        _mintBatch(to, tokenIds, amounts, "");
    }

    // -----------------------------
    // 🔹 Soulbound 처리 (양도 불가)
    // -----------------------------
    function safeTransferFrom(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override {
        revert("Soulbound: transfer disabled");
    }

    function safeBatchTransferFrom(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override {
        revert("Soulbound: transfer disabled");
    }

    function setApprovalForAll(address, bool) public virtual override {
        revert("Soulbound: approval disabled");
    }
}