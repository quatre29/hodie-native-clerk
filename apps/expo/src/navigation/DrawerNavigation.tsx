import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "../constants";
import { BottomNavigation } from "./BottomNavigation";
import HeaderButton from "../components/UI/HeaderButton";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomNavigation} />
    </Drawer.Navigator>
  );
};
