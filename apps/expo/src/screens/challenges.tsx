import {
  StyleSheet,
  Platform,
  Dimensions,
  Animated,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Layout, Text } from "@ui-kitten/components";
import {
  CHALLENGES,
  ChallengeDifficulty,
  IChallenge,
} from "../constants/challenges";
import ChallengeCard from "../components/Challenges/ChallengeCard";
import MaskedView from "@react-native-community/masked-view";
import Svg, { Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

type ChallengesScreenNavigationProp = NavigationProp<ParamListBase, string>;

type ChallengesScreenProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: ChallengesScreenNavigationProp;
};

interface BackdropProps {
  challenges: IChallenge[] | Partial<IChallenge>[];
  scrollX: Animated.Value;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const { width, height } = Dimensions.get("window");

const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;

const Backdrop = ({ challenges, scrollX }: BackdropProps) => {
  return (
    <View
      style={{
        position: "absolute",
        width,
        height: BACKDROP_HEIGHT,
      }}
    >
      <FlatList
        data={challenges}
        // FIXME: non-null assertion not supported
        keyExtractor={(item) => item.id!}
        renderItem={({ item, index }) => {
          if (!item.backdropImg) {
            return null;
          }

          const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
          });

          return (
            <MaskedView
              style={{ position: "absolute" }}
              maskElement={
                <AnimatedSvg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  style={{ transform: [{ translateX }] }}
                >
                  <Rect x="0" y="0" width={width} height={height} fill="red" />
                </AnimatedSvg>
              }
            >
              <Image
                source={{ uri: item.backdropImg }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  resizeMode: "cover",
                }}
              />
            </MaskedView>
          );
        }}
      />
      <LinearGradient
        colors={["transparent", "#222b45"]}
        style={{
          width,
          height: BACKDROP_HEIGHT,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
};

export const ChallengesScreen = ({ navigation }: ChallengesScreenProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: undefined,
      headerLeft: undefined,
    });
  }, []);

  const challenges = [
    { id: "left-dummy-item" },
    ...CHALLENGES,
    { id: "right-dummy-item" },
  ];

  return (
    <Layout level="1" style={style.container}>
      <Backdrop challenges={challenges} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={challenges}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          alignItems: "center",
        }}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <Animated.View
              style={{
                transform: [{ translateY }],
              }}
            >
              <ChallengeCard challenge={item} />
            </Animated.View>
          );
        }}
      />
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
});
