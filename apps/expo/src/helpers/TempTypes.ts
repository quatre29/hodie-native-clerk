// FIXME: Temporary till we get data

export enum ChallengeType {
  MonkMode = "Monk Mode",
  FiveDays = "5 Days",
}

export interface ChallengeDay {
  challengeLength: number;
  dayIndex: number;
  challengeType?: ChallengeType;
}
