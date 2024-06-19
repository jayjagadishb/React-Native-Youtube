import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/challenges/FirstChallenge";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello Jay</Text>
      <CustomComponent /> */}
      <FirstChallenge />
      {/* <StatusBar style="auto" /> */}
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
