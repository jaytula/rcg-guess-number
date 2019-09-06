import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from "react-native";

import TitleText from "./TitleText";
import BodyText from "./BodyText";
import Colors from "../constants/colors";

import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setWindowWidth(Dimensions.get("window").width);
      setWindowHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => Dimensions.removeEventListener("change", updateLayout);
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            width: windowWidth * 0.7,
            height: windowWidth * 0.7,
            borderRadius: windowWidth / 2,
            marginVertical: windowWidth / 30
          }}
        >
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../assets/success.png")}
            /*source={{
              uri:
                "https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg"
            }}*/
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            marginVertical: windowHeight / 60
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              fontSize: windowHeight < 400 ? 16 : 20
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.rounds}</Text> round to guess
            the number <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onNewGame}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: "center"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
