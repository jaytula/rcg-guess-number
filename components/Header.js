import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f7287b"
  },
  text: {
    fontSize: 18,
    color: "black"
  }
});

export default Header;
