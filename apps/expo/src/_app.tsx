import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { HomeScreen } from "./screens/home";
import { SignInSignUpScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "../theme.json";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

enum Screens {
  Home = "Home",
  SignIn = "Sign in",
}

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <SignedIn>
          <TRPCProvider>
            <SafeAreaProvider>
              <StatusBar style="light" />

              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerTransparent: true,
                    headerTitleStyle: {
                      fontWeight: "bold",
                      color: "#fff",
                    },
                  }}
                >
                  <Stack.Screen name={Screens.Home} component={HomeScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </TRPCProvider>
        </SignedIn>
        <SignedOut>
          <SignInSignUpScreen />
        </SignedOut>
      </ApplicationProvider>
    </ClerkProvider>
  );
};
