import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

export enum ROUTES {
  MAIN_SCREEN = "Main Screen",
  HOME = "Home",
  CHALLENGES = "Challenges",
  STATS = "Stats",
  EXPLORE = "Explore",

  SETTINGS = "Settings",
  TASK = "Task",
  CHALLENGE = "Challenge",

  HOME_DRAWER = "Home Drawer",
  HALL_OF_HONOR = "Hall of Honor",
}

export type RootStackParamList = {
  [ROUTES.MAIN_SCREEN]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.CHALLENGES]: undefined;
  [ROUTES.STATS]: undefined;
  [ROUTES.EXPLORE]: undefined;
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.TASK]: undefined;
  [ROUTES.CHALLENGE]: undefined;
  [ROUTES.HOME_DRAWER]: undefined;
  [ROUTES.HALL_OF_HONOR]: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> = {
  route: RouteProp<ParamListBase, T>;
  navigation: NavigationProp<ParamListBase, T>;
};
