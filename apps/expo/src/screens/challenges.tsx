import { StyleSheet, View } from "react-native";
import React from "react";
import { Layout, Button, Text } from "@ui-kitten/components";

export const ChallengesScreen = () => {
  return <Layout level="1" style={style.container}></Layout>;
};

const style = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex: 1,
  },
});
