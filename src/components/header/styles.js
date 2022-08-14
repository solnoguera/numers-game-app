import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    color: colors.text,
    fontWeight: "bold",
  },
});
