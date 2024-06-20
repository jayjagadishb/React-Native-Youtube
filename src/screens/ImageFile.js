import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ImageFile = ({ sourcei }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image style={styles.imageStyle} source={sourcei} />
      {/* <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      />
      <Image
        style={styles.imageStyle}
        source={require("../../assets/wp.jpg")}
      /> */}
    </ScrollView>
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

export default ImageFile;
