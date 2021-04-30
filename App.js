import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "./input";
import NavBar from "./components/navbar";
//import CurFast from "./components/curFast";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="New Fast" component={Input} />
          <Stack.Screen name="Current Fast" component={NavBar} />

          {/* <NavBar />
          <View style={styles.container}>
            <Text style={{ fontSize: 25 }}>Fasting Calculator</Text>
            <Input />
            <StatusBar style="auto" />
          </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
