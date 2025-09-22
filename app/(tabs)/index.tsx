import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello! This is Asif Sheikh</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
