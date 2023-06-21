import { ScrollView, View } from "react-native";
import React, { useState, useRef, use } from "react";
import { Text } from "@ui-kitten/components";
import { DateObj, calendarHelper } from "../../helpers/calendar";
import Day from "./Day";
import { ChallengeDay, ChallengeType } from "../../helpers/TempTypes";

const CalendarBar = () => {
  const [dates, setDates] = useState(calendarHelper.generateBarDates());
  const [scrollWidth, setScrollWidth] = useState(0);

  const scrollViewRef = useRef(null);

  // FIXME: Temporary till we get data
  function createChallenge(type: ChallengeType): DateObj[] {
    const MONK_MODE_CHALLENGE: DateObj[] = [];
    const FIVE_DAYS_CHALLENGE: DateObj[] = [];

    const todaysIndex = dates.findIndex((date) => date.isToday);

    dates.forEach((date, index) => {
      if (
        type === ChallengeType.MonkMode &&
        index >= todaysIndex &&
        index <= todaysIndex + 9
      ) {
        MONK_MODE_CHALLENGE.push(date);
      }

      if (
        type === ChallengeType.FiveDays &&
        index >= todaysIndex &&
        index <= todaysIndex + 4
      ) {
        FIVE_DAYS_CHALLENGE.push(date);
      }
    });

    return type === ChallengeType.MonkMode
      ? MONK_MODE_CHALLENGE
      : FIVE_DAYS_CHALLENGE;
  }

  createChallenge(ChallengeType.MonkMode);

  // FIXME: Temporary till we get data
  function getChallengeDay(
    day: DateObj,
    type: ChallengeType,
  ): ChallengeDay | undefined {
    const challenge = createChallenge(type);
    const dayIndex = challenge.findIndex((date) => date === day);

    if (dayIndex === -1) {
      return undefined;
    }

    return {
      challengeType: type,
      dayIndex,
      challengeLength: challenge.length,
    };
  }

  return (
    <View className="mb-4 flex-row">
      <ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 50,
          paddingTop: 0,
        }}
        onLayout={(event) => {
          console.log(event.nativeEvent.layout.x, "LAYOUT");
        }}
      >
        {dates.map((date, index) => (
          <Day
            key={date.date.toISOString()}
            date={date.date}
            isToday={date.isToday}
            scrollViewRef={scrollViewRef}
            todayIndex={date.isToday ? index : undefined}
            // FIXME: Temporary till we get data
            challengeDay={getChallengeDay(date, ChallengeType.MonkMode)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CalendarBar;
