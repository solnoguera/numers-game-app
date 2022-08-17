import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Header } from "./components";
import GameScreen from "./screens/gameScreen";
import StartGameScreen from "./screens/startGame";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("../assets/fonts/Lato-Light.ttf"),
  });
  let title = !userNumber ? "Guess The Number" : "Start a New Game";
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  return (
    loaded && (
      <SafeAreaView>
        <Header title={title} />
        {userNumber ? (
          <GameScreen onCancel={() => setUserNumber(null)} />
        ) : (
          <StartGameScreen onStartGame={onStartGame} />
        )}
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
