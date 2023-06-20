import React, { useState } from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";
import { Text } from "@ui-kitten/components";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants";

type TaskProps = Pick<PanGestureHandlerProps, "simultaneousHandlers">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD_DISMISSED = -SCREEN_WIDTH * 0.25;
const TRANSLATE_X_THRESHOLD_COMPLETE = SCREEN_WIDTH * 0.25;
const TASK_ITEM_HEIGHT = 70;

const Task = (props: TaskProps) => {
  const [taskOnCompleteThreshold, setTaskOnCompleteThreshold] = useState(false);
  const [taskOnDismissedThreshold, setTaskOnDismissedThreshold] =
    useState(false);
  const [isSwipeGestureActive, setIsSwipeGestureActive] = useState(false);

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(TASK_ITEM_HEIGHT + 15);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const navigation = useNavigation();

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      runOnJS(setIsSwipeGestureActive)(true);

      const shouldBeDismissed =
        translateX.value < TRANSLATE_X_THRESHOLD_DISMISSED;
      const shouldBeCompleted =
        translateX.value > TRANSLATE_X_THRESHOLD_COMPLETE;

      translateX.value = event.translationX;

      if (shouldBeCompleted) {
        runOnJS(setTaskOnCompleteThreshold)(true);
        runOnJS(setTaskOnDismissedThreshold)(false);
      }

      if (shouldBeDismissed) {
        runOnJS(setTaskOnCompleteThreshold)(false);
        runOnJS(setTaskOnDismissedThreshold)(true);
      }
    },
    onEnd: () => {
      runOnJS(setIsSwipeGestureActive)(false);

      const shouldBeDismissed =
        translateX.value < TRANSLATE_X_THRESHOLD_DISMISSED;
      const shouldBeCompleted =
        translateX.value > TRANSLATE_X_THRESHOLD_COMPLETE;

      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0);
      } else if (shouldBeCompleted) {
        translateX.value = withTiming(SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0);
      } else {
        translateX.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished) {
            runOnJS(setTaskOnCompleteThreshold)(false);
            runOnJS(setTaskOnDismissedThreshold)(false);
          }
        });
      }
    },
  });

  function handleNavigation() {
    console.log(isSwipeGestureActive, "--");

    if (!isSwipeGestureActive) {
      console.log(isSwipeGestureActive, "-++++-");

      navigation.navigate(ROUTES.TASK as never);
    }
  }

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rRightIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD_DISMISSED ? 1 : 0,
    );
    return { opacity };
  });

  const rLeftIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value > TRANSLATE_X_THRESHOLD_COMPLETE ? 1 : 0,
    );
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    marginVertical: marginVertical.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={rTaskContainerStyle}
      className="w-full items-center justify-center"
    >
      <Animated.View
        style={rLeftIconContainerStyle}
        className="absolute left-10 w-20 items-center justify-center"
      >
        <FontAwesome5
          name="check"
          size={TASK_ITEM_HEIGHT * 0.4}
          color="white"
        />
      </Animated.View>
      <Animated.View
        style={rRightIconContainerStyle}
        className="absolute right-10 w-20 items-center justify-center"
      >
        <FontAwesome5
          name="trash-alt"
          size={TASK_ITEM_HEIGHT * 0.4}
          color="white"
        />
      </Animated.View>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        simultaneousHandlers={props.simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View
          style={rStyle}
          className={`items-left h-full w-11/12 justify-center rounded-lg ${
            taskOnCompleteThreshold
              ? "border-2 border-green-700 bg-green-700/40"
              : taskOnDismissedThreshold
              ? "border-2 border-red-700 bg-red-700/40"
              : "bg-slate-700"
          } pl-10`}
        >
          <TouchableWithoutFeedback onPress={handleNavigation}>
            <Text category="h2">TASKaasAAAs</Text>
          </TouchableWithoutFeedback>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default Task;
