import React from "react"
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Tabs,
  Tab,
} from "native-base"

export default ({ children, transparent }) => {
  const styles = StyleSheet.create({
    tabUnderline: {
      backgroundColor: transparent ? "#FEE180" : "#5871B5",
      height: 3,
    },
    textStyle: {
      color: transparent ? "#fff" : "#484848",
      fontSize: 20,
      fontWeight: "bold"
    },
    activeTextStyle: {            
      color: transparent ? "#fff" : "#5871B5",
      fontSize: 20    
    },
    tabStyle: {
      backgroundColor: transparent ? "transparent" : "#FFFFFF",
    },
    activeTabStyle: {
      backgroundColor: transparent ? "transparent" : "#FFFFFF"
    },
    shadowEraser: {
      backgroundColor: transparent ? "transparent" : "#FFFFFF",
      height: 5,
      width: Dimensions.get("window").width,
      position: "absolute",
      top: 50,
      opacity: transparent && 0,
    },
    tabSeparator: {
      height: 30,
      width: 0.5,
      top: 10,
      backgroundColor: "#5871B5",
      position: "absolute",
      left: Dimensions.get("window").width / 2
    }
  })
      return (
        <View style={{flex: 1}}>
          <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabUnderline}>
              {
                React.Children.map(children, (child) => {
                  return (
                      <Tab {...child.props } textStyle={styles.textStyle} tabStyle={styles.tabStyle}
                      activeTextStyle={styles.activeTextStyle} activeTabStyle={styles.activeTabStyle} />
                  )
                })            
              }          
          </Tabs>
          <View style={styles.shadowEraser}/>
          <View style={styles.tabSeparator}/>
        </View>
      )
}
