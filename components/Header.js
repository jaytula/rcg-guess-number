import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Text from "./TitleText";
import Colors from "../constants/colors";

const Header = props => {
  const { title } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    borderBottomColor: Platform.OS === "android" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "android" ? 2 : 0
  },
  text: {
    color: Platform.OS === "android" ? "white" : Colors.primary
  }
});

export default Header;
