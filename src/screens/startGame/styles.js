import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
    //fontFamily: "Lato-Bold",
  },
  card: {
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 16,
    color: colors.black,
    paddingVertical: 15,
    //fontFamily: "Lato-Regular",
  },
  input: {
    width: "100%",
    maxWidth: 110,
    fontSize: 25,
    textAlign: "center",
    //fontFamily: "Lato-Regular",
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  summaryContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  summaryTitle: {
    fontWeight: "bold",
    padding: 10,
  },
});
