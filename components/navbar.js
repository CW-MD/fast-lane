import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NavBar() {
  return (
    <>
      <View style={styles.nav}></View>
    </>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: "5rem",
    backgroundColor: "blue",
    width: "100%",
  },
});
