package blockchain.GiveChain.domain.badge.dto.res;

public record BadgeResponse(

        Long badgeId,

        Integer tokenId,

        String badgeType,

        String badgeLabel,

        String txHash

) {
}
