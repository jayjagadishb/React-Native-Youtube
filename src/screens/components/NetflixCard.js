import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NetflixCard() {
  return (
    <View style={styles.headStyle1}>
      <Text style={styles.textStyle1}>Netflix Card</Text>
      <View style={styles.headStyle2}>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://i.pinimg.com/originals/86/2d/8e/862d8e2c5d7700db923ec5f51e77e088.png",
            }}
          />
        </View>
        <View>
          <Text style={styles.textStyle2}>Once Upon A Time In Hollywood</Text>
          <Text style={styles.textStyle3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quam
            voluptates obcaecati optio doloribus neque amet enim fuga, provident
            quis quas praesentium a expedita autem esse labore vitae facere
            maiores delectus eius. Quis beatae ipsa dolorem perspiciatis quas
            quaerat sunt!
          </Text>
        </View>
        <View>
          <Button
            title="Watch Now"
            onPress={() => {
              Linking.openURL(
                "https://www.youtube.com/watch?v=ELeMaP8EPAA&ab_channel=SonyPicturesEntertainment"
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headStyle1: {
    margin: 80,
    alignItems: "center",
  },
  headStyle2: {
    borderWidth: 2,
    alignItems: "center",
  },
  imgStyle: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  textStyle1: {
    fontSize: 30,
    padding: 20,
    textAlign: "center",
  },
  textStyle2: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
  textStyle3: {
    fontSize: 10,
    padding: 6,
    textAlign: "center",
    color: "grey",
  },
});
