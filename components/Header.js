import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Text from "./TitleText";
import Colors from "../constants/colors";

const Header = props => {
  const { title } = props;

  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
    paddingTop: 36
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderBottomWidth: 0
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2
  },
  text: {
    color: Platform.OS === "android" ? "white" : Colors.primary
  }
});

export default Header;
