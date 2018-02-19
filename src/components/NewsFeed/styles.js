import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: Dimensions.get("window").width,
  },
  scrollIndicator: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginBottom: 50,
    alignSelf: "center"
  }
})