"use strict";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { YellowBox } from "react-native";

export default function App() {
  let x = 1;
  console.log("App Executed");

  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core",
  ]);

  return (
    <View style={styles.container}>
      <Text>Hello Arka Gupta</Text>
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
