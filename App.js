import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/challenges/FirstChallenge";
import FlatListElement from "./src/screens/FlatListElement.js";
import ImageFile from "./src/screens/ImageFile.js";
import ButtonsEle from "./src/screens/ButtonsEle.js";
import CardComponent from "./src/screens/components/Cardcomponent.js";
import NetflixCard from "./src/screens/components/NetflixCard.js";
import SecondChallenge from "./src/screens/challenges/SecondChallenge.js";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello Jay</Text>
      <CustomComponent /> */}
      {/* <FirstChallenge /> */}
      {/* <FlatListElement /> */}
      {/* <ImageFile /> */}
      {/* <ButtonsEle /> */}
      {/* <CardComponent /> */}
      {/* <NetflixCard /> */}

      <SecondChallenge />

      <StatusBar style="auto" />
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
