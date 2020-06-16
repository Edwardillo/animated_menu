import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 56,
    height: 56,
    width: 56,
    backgroundColor: "#d8d8d8",
    marginBottom: 5,
  },
  title: {
    height: 20,
    color: "#ffffff",
    fontFamily: "RobotoBold",
    fontSize: 18,
    letterSpacing: 0.5,
    lineHeight: 20,
  },
});

function Avatar({ displayPicture, name, style }) {
  return (
    <View style={style}>
      <View style={styles.avatar} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

export default Avatar;
