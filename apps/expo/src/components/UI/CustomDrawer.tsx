import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { COLORS, IMAGES } from "../../constants";
import { useClerk, useAuth } from "@clerk/clerk-expo";
import { Button } from "@ui-kitten/components";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { user } = useClerk();
  const { signOut } = useAuth();

  return (
    <View className="flex-1 bg-slate-800">
      <DrawerContentScrollView {...props}>
        <ImageBackground source={IMAGES.drawerBg} style={{ height: 140 }}>
          <Image
            source={{ uri: user?.profileImageUrl }}
            style={styles.userImg}
          />
        </ImageBackground>
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View className="w-ful border-t-2 border-slate-700 py-10 px-2">
        <Button onPress={() => signOut()}>Log out</Button>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DRAWER_BG,
  },
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.DRAWER_BG,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
