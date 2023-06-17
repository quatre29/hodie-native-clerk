import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface HeaderButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  style?: string;
  onPress?: () => void;
  navigateToScreen?: string;
}

const HeaderButton = ({
  iconName,
  size = 30,
  color = "#fff",
  style,
  onPress,
  navigateToScreen,
}: HeaderButtonProps) => {
  const navigation = useNavigation();

  function navigate() {
    // @ts-expect-error
    navigation.navigate(navigateToScreen);
  }
  return (
    <>
      <View className={style}>
        <Ionicons
          name={iconName}
          color={color}
          size={size}
          onPress={onPress ? onPress : navigate}
        />
      </View>
    </>
  );
};

export default HeaderButton;
