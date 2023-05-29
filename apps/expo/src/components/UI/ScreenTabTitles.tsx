import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";

const ScreenTabTitles = () => {
  return (
    <View className="flex-row items-center">
      <View className="flex-1 items-center justify-center ">
        <Text category="h5">Challenge</Text>
      </View>
      <View className="flex-1 items-center justify-center ">
        <Text category="h5">Tasks</Text>
      </View>
    </View>
  );
};

export default ScreenTabTitles;
