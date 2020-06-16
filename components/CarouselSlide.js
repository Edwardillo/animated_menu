import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AnimatedImage, AnimatedText } from "./AnimatedComponents";

function CarouselSlide({ item, isActive }) {
  const { image, title, description } = item;

  return (
    <View style={styles.card}>
      <AnimatedImage
        status={isActive}
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.cardContent}>
        <AnimatedText style={styles.title} status={isActive}>
          {title}
        </AnimatedText>
        <AnimatedText style={styles.description} status={isActive}>
          {description}
        </AnimatedText>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: 250,
    alignItems: "center",
    marginTop: 70,
  },
  image: {
    width: 150,
    position: "absolute",
    top: -50,
    zIndex: 3,
  },
  cardContent: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    borderRadius: 20,
    paddingTop: 35,
    marginHorizontal: 15,
    alignItems: "center",
    shadowColor: "#254174",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.43,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    width: 133,
    height: 60,
    marginTop: 30,
    color: "#4e5b76",
    fontFamily: "RobotoBold",
    textAlign: "center",
    fontSize: 25,
    letterSpacing: 0.69,
    lineHeight: 30,
  },
  description: {
    marginTop: 20,
    marginHorizontal: 35,
    color: "#a0a9b8",
    fontFamily: "Roboto",
    fontSize: 14,
    letterSpacing: 0.39,
    lineHeight: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#303371",
    padding: 10,
    borderRadius: 19,
    width: 75,
    position: "absolute",
    bottom: 30,
  },
  buttonText: {
    width: 33,
    height: 20,
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 14,
    letterSpacing: 0.39,
    lineHeight: 20,
  },
});

export default CarouselSlide;
