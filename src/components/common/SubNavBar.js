import React from "react"
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from "react-native"
import Picker from "./Picker"

export default ({ children }) => (
  <View style={styles.container} > 
    <View style={styles.subNavBar} >
    </View> 
    <View style={styles.pickers}>
      { children }
    </View>
  </View>
)



const styles = StyleSheet.create({
  container: {
    
  },
  subNavBar: {

    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    height: 65
  },
  pickers: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width
  }
})