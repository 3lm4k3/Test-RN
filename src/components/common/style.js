import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 50
  },
  bold: {
    fontWeight: "bold",    
  },
  body: {
    flex: 1,
  },
  left: {
    position: "absolute",
    left: 15,
  },
  right: {
    position: "absolute",
    right: 15,
  },
  Icon: {
    fontSize: 20,
  },
  IconWrapper: {
    position: "relative"
  },
  iconNotification: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 15,
    width: 15,
    backgroundColor: "#FE8080",
    borderRadius: 50,
    zIndex: 2,
  },
  buttonImage: {
    resizeMode: "cover",
    height: 25,
    width: 75,
    marginTop: 5
  },
  checkbox: {
    // backgroundColor: "#fff",
    borderColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.8,
  },
  underlined: {
    textDecorationLine: "underline"
  },
  white: {
    color: "#fff"
  },
  black: {
    color: "#000"
  },
  h3: {
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 5,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  inputWrapper: {
    borderBottomColor: "#FCFE80",
    paddingLeft: 5 
  },
  inputIcon: {
    marginTop: 5,
    marginRight: 5
  },
  row: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  center: {
    justifyContent: "center", 
    alignItems: "center"
  },
  noBorder: {
    borderWidth: 0
  },
  transBorder: {
    borderColor: "transparent"
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ABABAB",
    height: 60
  },
  footerTab: {
    backgroundColor: "#F7F7F7",
    paddingTop: 5

  },
})