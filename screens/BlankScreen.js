import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function BlanknScreen() {
  return (
    <View style={styles.container}>
      <Text>Blank Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BlanknScreen;
