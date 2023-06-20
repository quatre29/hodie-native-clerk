import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";
import { SignInSignUpScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "../theme.json";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomNavigation } from "./navigation/BottomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "./screens/settings/settings";
import { ROUTES } from "./constants";
import { DrawerNavigation } from "./navigation/DrawerNavigation";
import TaskModal from "./components/Tasks/TaskModal";
// const HomeScreenButton = ({ onPress }: { onPress: () => void }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View
//         style={{
//           width: 50,
//           height: 50,

//           borderRadius: 25,
//           backgroundColor: "blue",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "#fff", fontSize: 18 }}>Button</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <SignedIn>
            <TRPCProvider>
              <SafeAreaProvider>
                <StatusBar style="light" />
                <NavigationContainer>
                  <Stack.Navigator
                    screenOptions={{
                      headerTransparent: true,
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#fff",
                      },
                    }}
                  >
                    <Stack.Screen
                      name="MainScreen"
                      component={DrawerNavigation}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name={ROUTES.SETTINGS}
                      component={Settings}
                      options={{
                        presentation: "modal",
                      }}
                    />
                    <Stack.Screen
                      name={ROUTES.TASK}
                      component={TaskModal}
                      options={{
                        presentation: "modal",
                      }}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
              </SafeAreaProvider>
            </TRPCProvider>
          </SignedIn>
          <SignedOut>
            <SignInSignUpScreen />
          </SignedOut>
        </ApplicationProvider>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
};
