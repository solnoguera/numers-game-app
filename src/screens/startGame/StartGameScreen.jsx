import React from "react";
import { View, Text, TextInput } from "react-native";
import { Header } from "../../components";
import { styles } from "./styles";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess The Number" />
      <Text style={styles.title}>Start Game</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Choose a number</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </View>
  );
};

export default StartGameScreen;
