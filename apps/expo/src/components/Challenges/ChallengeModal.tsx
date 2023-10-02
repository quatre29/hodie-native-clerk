import { Image, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { ROUTES, RootStackNavigationProp } from "../../constants/routes";
import { IChallenge } from "../../constants/challenges";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
import Card from "../UI/Card";
import {
  Button,
  Text,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";

type ChallengeProps = RootStackNavigationProp<ROUTES.CHALLENGE>;

interface RouteParamsPayload {
  challenge: IChallenge;
}

type BackdropProps = RouteParamsPayload;

const { width, height } = Dimensions.get("window");

const Backdrop = ({ challenge }: BackdropProps) => {
  return (
    <>
      <Image
        style={{ width, height: height * 0.3, position: "absolute" }}
        source={{ uri: challenge.backdropImg }}
      />
      <LinearGradient
        colors={["transparent", COLORS.BACKGROUND]}
        style={{ width, height: height * 0.3, position: "absolute" }}
      />
    </>
  );
};

const ChallengeModal = ({ route, navigation }: ChallengeProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));

  const { challenge } = route.params as RouteParamsPayload;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: challenge.title,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Backdrop challenge={challenge} />
      <View style={styles.containerContent}>
        <Card customStyles={styles.headerCard}></Card>
        <Card customStyles={styles.bodyCard}>
          <ScrollView style={{ width: "100%", flex: 1 }}>
            <View style={styles.bodyCardContainer}>
              <Text appearance="hint">Choose your non negotiable tasks</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                style={styles.selectForm}
              >
                <SelectItem style={styles.selectForm} title="Option 1" />
                <SelectItem title="Option 2" />
                <SelectItem title="Option 3" />
              </Select>
              <Text appearance="hint">Choose your general tasks</Text>
            </View>
          </ScrollView>
        </Card>
        <Button style={styles.joinButton} status="primary">
          JOIN
        </Button>
      </View>
    </View>
  );
};

export default ChallengeModal;

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.BACKGROUND, flex: 1 },
  containerContent: {
    flex: 1,
    alignItems: "center",
  },
  headerCard: {
    width: "87%",
    height: 200,
    marginTop: 100,
    borderRadius: 10,
  },
  bodyCard: {
    width: "87%",
    flex: 1,
    marginBottom: 50,
    marginTop: 50,
    borderRadius: 10,
    padding: 10,
  },
  bodyCardContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
  },
  selectForm: {
    backgroundColor: "red",
    width: "100%",
  },
  joinButton: { width: "87 %", marginBottom: 50 },
});
