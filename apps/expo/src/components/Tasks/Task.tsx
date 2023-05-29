import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
// import { PanGestureHandler } from "react-native-gesture-handler";

const Task = () => {
  return (
    <View className="mb-8 w-full items-center justify-center">
      {/* <PanGestureHandler> */}
      <View className="w-11/12 border-2 border-blue-500 py-5 pl-10">
        <Text category="h2">TASK</Text>
      </View>
      {/* </PanGestureHandler> */}
    </View>
  );
};

export default Task;
