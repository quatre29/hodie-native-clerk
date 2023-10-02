import { StyleSheet, View, Platform, ViewStyle } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

interface CardProps {
  customStyles?: ViewStyle;
}

const Card = ({
  children,
  customStyles,
}: React.PropsWithChildren<CardProps>) => {
  return <View style={[styles.container, customStyles]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 34,
    backgroundColor: COLORS.BACKGROUND,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
