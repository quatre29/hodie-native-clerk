import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "../constants";
import { BottomNavigation } from "./BottomNavigation";
import HeaderButton from "../components/UI/HeaderButton";
import CustomDrawer from "../components/UI/CustomDrawer";
import { HallOfHonor } from "../screens/hallOfHonor";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomNavigation} />
      <Drawer.Screen
        options={{
          headerShown: true,
        }}
        name={ROUTES.HALL_OF_HONOR}
        component={HallOfHonor}
      />
    </Drawer.Navigator>
  );
};
