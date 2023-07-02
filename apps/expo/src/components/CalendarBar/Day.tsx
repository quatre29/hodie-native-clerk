import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";
import { DateObj } from "../../helpers/calendar";
import { ChallengeDay, ChallengeType } from "../../helpers/TempTypes";
import { ChallengeColors } from "../../helpers/Colors";

// FIXME: Temporary till we get data
interface DayProps extends DateObj {
  challengeDay?: ChallengeDay;
  scrollViewRef?: React.MutableRefObject<ScrollView | null>;
  todayIndex?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Day = (props: DayProps) => {
  const [dayWidth, setDayWidth] = useState(0);

  React.useEffect(() => {
    if (props.scrollViewRef?.current && props.isToday && props.todayIndex) {
      props.scrollViewRef.current.scrollTo({
        animated: true,
        // FIXME: possibly breaking on different screens: NEEDS TESTING
        x: props.todayIndex * dayWidth - SCREEN_WIDTH / 2 + dayWidth / 2,
        y: 0,
      });
    }
  }, [dayWidth]);

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
      //FIXME: non-null not allowed
      props.challengeDay!.challengeLength - 1
    ) {
      return "rounded-r-2xl";
    }
  }

  return (
    <View
      onLayout={(event) => {
        setDayWidth(event.nativeEvent.layout.width);
      }}
      className={`flex h-16 items-center justify-around  px-4 py-1 ${
        props.isToday && !props.challengeDay && `rounded-2xl bg-slate-600/75`
      } ${
        props.challengeDay &&
        `${getBgRoundedCorners()} bg-${getBgColor()}-700/40`
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
  dateBorder: {},
});
