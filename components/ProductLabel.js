import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProductLabel({ count, containerStyle }) {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Text style={styles.text}>{`You have ${count} Product${
        count === 1 || "s"
      }`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    height: 25,
    width: 150,
  },
  text: {
    color: "black",
    fontFamily: "Roboto",
  },
});

export default ProductLabel;
