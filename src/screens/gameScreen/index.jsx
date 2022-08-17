import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

const GameScreen = ({ numberSelected }) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude)
      return generateRandomBetween(min, max, exclude);
    else return randomNumber;
  };

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, numberSelected)
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        La suposición del oponente es{" "}
        <Text style={styles.number}>{currentGuess}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Menor" onPress={() => null} color={colors.primary} />
        <Button title="Mayor" onPress={() => null} color={colors.primary} />
      </View>
    </View>
  );
};

export default GameScreen;
