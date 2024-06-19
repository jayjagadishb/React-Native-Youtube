import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function FlatListElement() {
  const names = [
    {
      name: "jay",
    },
    {
      name: "sam",
    },
    {
      name: "ram",
    },
    {
      name: "vijay",
    },
    {
      name: "rohan",
    },
  ];
  return (
    <View>
      <FlatList
        data={names}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});
