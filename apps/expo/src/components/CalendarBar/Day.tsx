import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { DateObj } from "../../helpers/calendar";
import { ChallengeDay, ChallengeType } from "../../helpers/TempTypes";
import { ChallengeColors } from "../../helpers/Colors";

// FIXME: Temporary till we get data
interface DayProps extends DateObj {
  challengeDay?: ChallengeDay;
}

const Day = (props: DayProps) => {
  function getBgColor(): string {
    if (props.challengeDay?.challengeType === ChallengeType.MonkMode) {
      return ChallengeColors.monkMode;
    }

    if (props.challengeDay?.challengeType === ChallengeType.FiveDays) {
      return ChallengeColors.fiveDays;
    }

    return "slate";
  }

  function getBgRoundedCorners(): string | void {
    if (props.challengeDay?.dayIndex === 0) {
      return "rounded-l-2xl";
    }
    if (
      props.challengeDay?.dayIndex ===
      props.challengeDay!.challengeLength - 1
    ) {
      return "rounded-r-2xl";
    }
  }
  // `rounded-2xl bg-${getBgColor()}-500/40`
  return (
    <View
      className={`flex h-16 items-center justify-around  px-4 py-1 ${
        props.isToday && !props.challengeDay && `rounded-2xl bg-slate-600/75`
      } ${
        props.challengeDay &&
        `${getBgRoundedCorners()} bg-${getBgColor()}-500/40`
      }`}
    >
      <Text
        style={props.isToday && styles.isToday}
        category="p2"
        appearance="hint"
      >
        {props.date.toDate().toDateString().slice(0, 2).toUpperCase()}
      </Text>
      <Text
        style={[styles.dateBorder, props.isToday && styles.isToday]}
        category="p1"
      >
        {props.date.date()}
      </Text>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  isToday: {
    fontWeight: "bold",
  },
  dateBorder: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 100,
  },
});
