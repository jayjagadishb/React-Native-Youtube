import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function FlatListElement() {
  const names = [
    {
      index: "1",
      name: "jay",
    },
    {
      index: "2",
      name: "sam",
    },
    {
      index: "3",
      name: "ram",
    },
    {
      index: "4",
      name: "vijay",
    },
    {
      index: "5",
      name: "rohan",
    },
    {
      index: "6",
      name: "raj",
    },
    {
      index: "7",
      name: "doll",
    },
    {
      index: "8",
      name: "free",
    },
    {
      index: "9",
      name: "rokan",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
          //for giving keys
          return key.index;
        }}
        horizontal //for horizontal scrolling
        showsHorizontalScrollIndicator={false}
        inverted //for getting data in reverse order
        data={names}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
    textAlign: "center",
  },
  listStyle: {
    height: 150,
  },
  container: {
    // Adjust the container to align items centrally
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    // Explicit height and width for items
    height: 200,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
  },
});
