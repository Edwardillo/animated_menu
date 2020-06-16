import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import AnimatedCarousel from "../components/AnimatedCarousel";
import BackgroundImage from "../components/Background";
import ProductLabel from "../components/ProductLabel";
import Avatar from "../components/Avatar";

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    paddingTop: 60,
  },
});

const data = [
  {
    title: "Moonstone Keychain",
    description: "Choosing the Best Gemstone for Your Necklace and Jewelry",
    image: require("../assets/rock_1.png"),
  },
  {
    title: "Sapphire Keychain",
    description: "Choosing the Best Gemstone for Your Necklace and Jewelry",
    image: require("../assets/rock_2.png"),
  },
];

function Weareable() {
  const insets = useSafeArea();
  return (
    <BackgroundImage>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          alignItems: "center",
        }}
      >
        <Avatar style={styles.avatar} name="Edward Romero" />
        <ProductLabel count={data.length} containerStyle={{ marginTop: 15 }} />
        <AnimatedCarousel data={data} />
      </View>
    </BackgroundImage>
  );
}

export default Weareable;
