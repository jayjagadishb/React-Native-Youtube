import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

const ButtonsEle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.marginBottom}>
        <Button
          title="Click to visit"
          onPress={() => {
            console.log("Welcome to the channel");
            Alert.alert("Button is pressed");
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Welcome to the channel");
          Alert.alert("Touchable opacity Button is pressed");
        }}
      >
        <Image
          style={styles.imagesize}
          source={require("../../assets/wp.jpg")}
        />
        <Text style={styles.marginBottom}>Click here to login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 90,
  },
  marginBottom: {
    marginBottom: 20, // Adds consistent margin below each element
  },
  imagesize: {
    width: 240,
    height: 240,
  },
});

export default ButtonsEle;
