import React, { useRef, useState } from "react";
import Task from "./Task";
import { ScrollView, FlatList } from "react-native-gesture-handler";

const TasksView = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const scrollRef = useRef(null);

  const tasks = Array.from(Array(12).keys());

  return (
    <FlatList
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 4,
        height: "100%",
        width: "100%",
        marginBottom: 50,
        flex: 1,
      }}
      scrollEnabled={verticalScrollEnabled}
      data={tasks}
      keyExtractor={(item) => item.toString()}
      renderItem={() => (
        // FIXME: Waiting for data - placeholder
        <Task
          simultaneousHandlers={scrollRef}
          verticalScrollState={setVerticalScrollEnabled}
        />
      )}
    />
  );
};

export default TasksView;
