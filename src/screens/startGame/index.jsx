import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card, Input } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

const StartGameScreen = ({ onStartGame }) => {
  const [input, setInput] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onNumberChange = (text) => {
    setInput(text.replace(/[^0-9]/g, ""));
  };

  const onResetInput = () => {
    setInput("");
    setConfirmed(false);
  };

  const handleConfirm = () => {
    const number = parseInt(input, 10);
    if (number === NaN || number <= 0 || number > 99) return;
    setConfirmed(true);
    setSelectedNumber(number);
    setInput("");
  };

  const confirmedOutput = () => (
    <Card style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>
        Your choosen number is {selectedNumber}
      </Text>
      <Button
        title="Let's start the game!"
        onPress={() => onStartGame(selectedNumber)}
        color={colors.secondary}
      ></Button>
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Choose a number</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              value={input}
              onChangeText={onNumberChange}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Clean"
              onPress={onResetInput}
              color={colors.primary}
            />
            <Button
              title="Confirm"
              onPress={handleConfirm}
              color={colors.secondary}
            />
          </View>
        </Card>
        {confirmed && confirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
