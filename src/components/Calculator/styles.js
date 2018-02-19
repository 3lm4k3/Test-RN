import {
  StyleSheet
} from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  result: {
    backgroundColor: "#FCFE80",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
    elevation: 5,
    marginVertical: 10
  },
  resultText: {
    color: "#935CAE",
    fontSize: 40,
    fontWeight: "bold"
  },
  keyboard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  left: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    flex: 5,
    marginVertical: 10,
  },
  right: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "center",
    // marginVertical: -8
  },
  button: {
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10,
    height: 70,
    width: 80,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#484848"
  },
  subTitle: {
    fontWeight: "bold",
    color: "#FCFE80",
    fontSize: 22,
    marginLeft: 16
  },
  results: {
    flex: 1,
    marginVertical: 10
  },
  resultsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  resultsLeftText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 5
  },
  resultsRightText: {
    color: "#fff",
    fontWeight: "bold",   
    fontSize: 20,
  },
  
})