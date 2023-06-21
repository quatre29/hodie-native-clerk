import React, { useRef, useState } from "react";
import Task from "./Task";
import { ScrollView } from "react-native-gesture-handler";

const TasksView = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const scrollRef = useRef(null);

  return (
    <ScrollView
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      className="mt-4 h-full w-full"
      scrollEnabled={verticalScrollEnabled}
    >
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
      <Task
        simultaneousHandlers={scrollRef}
        verticalScrollState={setVerticalScrollEnabled}
      />
    </ScrollView>
  );
};

export default TasksView;
