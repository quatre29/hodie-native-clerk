import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import Task from "./Task";

const TasksView = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      className="mt-4 h-full w-full border-2 border-red-500"
    >
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ScrollView>
  );
};

export default TasksView;
