// FIXME: temporary till we get data

export enum ChallengeType {
  FiveDays = "Five Days",
  MonkMode = "Monk Mode",
}

export enum ChallengeDifficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
  Extreme = "Extreme",
}

export interface IChallenge {
  id: string;
  title: string;
  type: ChallengeType;
  duration: number;
  difficulty: ChallengeDifficulty;
  backdropImg: string;
  cardImg: string;
}

export const CHALLENGES: IChallenge[] = [
  {
    id: "1",
    title: "Five Days",
    type: ChallengeType.FiveDays,
    duration: 5,
    difficulty: ChallengeDifficulty.Medium,
    backdropImg:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: "2",
    title: "Monk Mode",
    type: ChallengeType.MonkMode,
    duration: 21,
    difficulty: ChallengeDifficulty.Hard,
    backdropImg:
      "https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "3",
    title: "Five Days 2",
    type: ChallengeType.FiveDays,
    duration: 5,
    difficulty: ChallengeDifficulty.Medium,
    backdropImg:
      "https://images.unsplash.com/photo-1632069864528-c169be012906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1455044372794-d981761b5bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoYWxsZW5nZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    title: "Monk Mode 4",
    type: ChallengeType.MonkMode,
    duration: 21,
    difficulty: ChallengeDifficulty.Hard,
    backdropImg:
      "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1420393000485-4697383da9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoYWxsZW5nZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];
