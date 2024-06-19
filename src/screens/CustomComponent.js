import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function CustomComponent() {
  const getFullName = (fname, mname, lname) => {
    return `My name is ${fname} ${mname} ${lname}`;
  };
  return (
    <View style={styles.container}>
      <Text>Hello Jay! This is a custom component!</Text>
      <Text> Hi ! {getFullName("jay", "jagadish", "behera")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
