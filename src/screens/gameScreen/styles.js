import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  number: {
    color: "green",
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 25,
  },
});
