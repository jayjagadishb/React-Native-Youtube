import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";

const HookEffect = () => {
  const [myUserData, setmyUserData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const res = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await res.json();
      setmyUserData(myData);
      setIsLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.TopText}>Student Details</Text>
      <View style={styles.container}>
        <FlatList
          data={myUserData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  onError={() =>
                    console.log(`Failed to load image: ${item.image}`)
                  }
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text style={styles.email}>Email: {item.email}</Text>
                  <Text style={styles.mobile}>Mobile: {item.mobile}</Text>
                  <Text style={styles.description}>
                    Desc: {item.description}
                  </Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(item.website)}
                  >
                    <Text style={styles.website}>Website: {item.website}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HookEffect;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 320,
    padding: 10,
    backgroundColor: "black",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  mobile: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  website: {
    fontSize: 16,
    color: "#1e90ff",
    marginTop: 4,
    textDecorationLine: "underline",
  },
  TopText: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
    fontWeight: "700",
  },
});
