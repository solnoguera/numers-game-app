import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "./components";
import GameScreen from "./screens/gameScreen";
import StartGameScreen from "./screens/startGame";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  let title = !userNumber ? "Guess The Number" : "Start a New Game";
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  return (
    <SafeAreaView>
      <Header title={title} />
      {userNumber ? (
        <GameScreen />
      ) : (
        <StartGameScreen onStartGame={onStartGame} />
      )}
    </SafeAreaView>
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
