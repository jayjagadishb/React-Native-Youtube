import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ImageFile from "../ImageFile";

const CardComponent = () => {
  return (
    <View>
      <ImageFile sourcei={require("../../../assets/wp.jpg")} />
      <ImageFile sourcei={require("../../../assets/wp.jpg")} />
      <ImageFile sourcei={require("../../../assets/wp.jpg")} />
      <ImageFile sourcei={require("../../../assets/wp.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 300,
    height: 300,
    margin: 30,
  },
});

export default CardComponent;

//props
