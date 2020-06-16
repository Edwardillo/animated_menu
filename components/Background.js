import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const BackgroundImage = (props) => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/background1.png")}
      resizeMode="stretch"
    >
      <View style={{ flex: 1 }}>{props.children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: "100%",
    width: "100%",
  },
});

export default BackgroundImage;
