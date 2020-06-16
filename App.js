import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Weareable from "./screens/Weareable";
import BlankScreen from "./screens/BlankScreen";
import AnimatedTabBar from "./components/AnimatedTabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={AnimatedTabBar}>
          <Tab.Screen
            name="Wearables"
            component={Weareable}
            options={{
              iconName: "widgets",
            }}
          />
          <Tab.Screen
            name="Profile"
            component={BlankScreen}
            options={{
              iconName: "face",
            }}
          />
          <Tab.Screen
            name="Help"
            component={BlankScreen}
            options={{
              iconName: "help-outline",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
