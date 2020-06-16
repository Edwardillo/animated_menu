import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AnimatedView } from "./AnimatedComponents";
import { MaterialIcons } from "@expo/vector-icons";

function AnimatedTabBar({ state, descriptors, navigation }) {
  return (
    <AnimatedView
      style={{
        flexDirection: "row",
        marginBot: 20,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#000000" : "#a0a9b8";

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
            }}
            w
          >
            <MaterialIcons name={options.iconName} size={24} color={color} />
            <Text style={{ color }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </AnimatedView>
  );
}

export default AnimatedTabBar;
