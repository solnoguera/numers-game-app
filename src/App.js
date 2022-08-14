import { Text, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/startGame/StartGameScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen />
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
