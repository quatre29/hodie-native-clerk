import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { DateObj } from "../../helpers/calendar";

const Day = (props: DateObj) => {
  return (
    <View
      className={`mx-2 flex h-16 items-center justify-around py-1 px-2 ${
        props.isToday && "rounded-2xl bg-slate-600/75 "
      }`}
    >
      <Text
        style={props.isToday && styles.isToday}
        category="p2"
        appearance="hint"
      >
        {props.date.toDate().toDateString().slice(0, 2).toUpperCase()}
      </Text>
      <Text style={props.isToday && styles.isToday} category="p1">
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
});
