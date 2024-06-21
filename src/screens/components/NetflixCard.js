import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NetflixCard({ img, name, desc, trail }) {
  return (
    <View style={styles.headStyle1}>
      <View style={styles.headStyle2}>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: img,
            }}
          />
        </View>
        <View>
          <Text style={styles.textStyle2}>{name}</Text>
          <Text style={styles.textStyle3}>{desc}</Text>
        </View>
        <View style={styles.btnStyle}>
          <Button
            title="Watch Now"
            onPress={() => {
              Linking.openURL(trail);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headStyle1: {
    margin: 40,
    alignItems: "center",
  },
  headStyle2: {
    borderWidth: 1,
    alignItems: "center",
    height: 372,
    width: 250,
    borderColor: "white",
  },
  imgStyle: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  textStyle1: {
    fontSize: 34,
    padding: 20,
    textAlign: "center",
    color: "#be0000",
    letterSpacing: 2,
  },
  textStyle2: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    letterSpacing: 1,
    color: "white",
  },
  textStyle3: {
    fontSize: 12,
    padding: 6,
    textAlign: "center",
    color: "grey",
    lineHeight: 12,
  },
  btnStyle: {
    margin: 8,
  },
});
