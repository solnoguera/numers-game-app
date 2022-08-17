import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

const GameScreen = ({ numberSelected, onCancel }) => {
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
        The opponent's guess is{" "}
        <Text style={styles.number}>{currentGuess}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Is Smaller"
          onPress={() => null}
          color={colors.secondary}
        />
        <Button
          title="Is Bigger"
          onPress={() => null}
          color={colors.secondary}
        />
      </View>
      <Button title="Back" onPress={onCancel} color={colors.primary} />
    </View>
  );
};

export default GameScreen;
