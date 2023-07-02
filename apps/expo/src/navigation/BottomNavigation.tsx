import React from "react";
import { HomeScreen } from "../screens/home";
import { StatsScreen } from "../screens/stats";
import { ExploreScreen } from "../screens/explore";
import { ChallengesScreen } from "../screens/challenges";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../helpers/Colors";
import HeaderButton from "../components/UI/HeaderButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "../constants";

const BottomTab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
        },
        tabBarStyle: {
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          backgroundColor: "#0f172a",
          position: "absolute",
          borderTopWidth: 0,
          paddingTop: 5,
        },
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
        headerRight: () => (
          <HeaderButton
            style="mr-4"
            iconName="settings-outline"
            size={20}
            navigateToScreen={ROUTES.SETTINGS}
          />
        ),
        headerLeft: () => (
          <HeaderButton
            style="ml-4"
            iconName="list"
            size={20}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={`home${focused ? "" : "-outline"}`}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                size={30}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={ROUTES.CHALLENGES}
        component={ChallengesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                name={`basketball${focused ? "" : "-outline"}`}
                size={30}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={ROUTES.STATS}
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                name={`stats-chart${focused ? "" : "-outline"}`}
                size={30}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={ROUTES.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                name={`map${focused ? "" : "-outline"}`}
                size={30}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
