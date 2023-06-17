import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import Task from "./Task";
import { ScrollView } from "react-native-gesture-handler";

const TasksView = () => {
  const scrollRef = useRef(null);

  return (
    <ScrollView
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      className="mt-4 h-full w-full"
    >
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
      <Task simultaneousHandlers={scrollRef} />
    </ScrollView>
  );
};

export default TasksView;
