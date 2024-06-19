import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FirstChallenge() {
  const name = "Text 3";
  return (
    <View>
      <Text style={styles.textStyleOne}>FirstChallenge Text 1</Text>
      <Text style={styles.textStyleTwo}>FirstChallenge Text 2</Text>
      <Text style={styles.textStyleThree}>FirstChallenge {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
    borderWidth: 4,
    borderColor: "black",
    padding: 4,
    margin: 4,
  },
  textStyleTwo: {
    fontSize: 30,
    borderWidth: 4,
    borderColor: "black",
    padding: 4,
    margin: 4,
  },
  textStyleThree: {
    fontSize: 20,
    borderWidth: 4,
    borderColor: "black",
    padding: 4,
    margin: 4,
  },
});
