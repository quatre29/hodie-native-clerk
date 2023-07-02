import React, { useRef, useState } from "react";
import Task from "./Task";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { TASKS } from "../../constants/tasks";

const TasksView = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const scrollRef = useRef(null);

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
      data={TASKS}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        // FIXME: Waiting for data - placeholder
        <Task
          simultaneousHandlers={scrollRef}
          verticalScrollState={setVerticalScrollEnabled}
          taskItem={item}
        />
      )}
    />
  );
};

export default TasksView;
