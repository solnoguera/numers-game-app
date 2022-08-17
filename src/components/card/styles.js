import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
});
