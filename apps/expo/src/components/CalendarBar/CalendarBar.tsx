import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { calendarHelper } from "../../helpers/calendar";
import Day from "./Day";

const CalendarBar = () => {
  const [dates, setDates] = useState(calendarHelper.generateBarDates());

  return (
    <View className="mb-4 flex-row">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 50,
          paddingTop: 0,
        }}
      >
        {dates.map((date) => (
          <Day
            key={date.date.toISOString()}
            date={date.date}
            isToday={date.isToday}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CalendarBar;
