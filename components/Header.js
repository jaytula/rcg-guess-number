import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./TitleText";

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
    color: "white"
  }
});

export default Header;
