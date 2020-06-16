import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function BlanknScreen() {
  return (
    <View style={styles.container}>
      <Text>Blank Page!</Text>
    </View>
  );
}

export default BlanknScreen;
