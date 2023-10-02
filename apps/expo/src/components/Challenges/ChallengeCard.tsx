import { StyleSheet, View, Dimensions, Image, Platform } from "react-native";
import React from "react";
import { IChallenge } from "../../constants/challenges";
import { Text, Button } from "@ui-kitten/components";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../helpers/globalTypes";
import Card from "../UI/Card";

interface ChallengeCardProps {
  challenge: IChallenge | Partial<IChallenge>;
}

const { width } = Dimensions.get("window");

const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACING = 10;
const DUMMY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const navigation = useNavigation<NavigationProp>();

  function handleNavigation() {
    navigation.navigate(ROUTES.CHALLENGE, { challenge });
  }

  if (!challenge.title) {
    return <View style={{ width: DUMMY_ITEM_SIZE }}></View>;
  }

  return (
    <View style={styles.container}>
      <Card customStyles={styles.imageContainer}>
        <Image style={styles.posterImage} source={{ uri: challenge.cardImg }} />
        <Text category="h4" numberOfLines={1}>
          {challenge.title}
        </Text>
        <Text style={{ marginTop: 10, padding: SPACING }} numberOfLines={3}>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <View className="w-full">
          <Button appearance="ghost" status="info" onPress={handleNavigation}>
            View more
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default ChallengeCard;

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
  },
  imageContainer: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    width: "85%",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
