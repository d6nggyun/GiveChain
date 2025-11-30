// lib/rankingTypes.ts
export type RankingCountryResponse = {
  country: string;
  totalDonationAmount: number;
  isMine: boolean;
};

export type RankingMemberResponse = {
  memberId: number;
  memberName: string;
  memberCountry: string;
  totalDonationAmount: number;
  isMine: boolean;
  badgeTypes: string[];
};

export type CategoryRankingResponse = {
  category: string;
  rankings: RankingMemberResponse[];
};

export type RankingResponse = {
  countryRankings: RankingCountryResponse[];
  categoryRankings: CategoryRankingResponse[];
};