import React from "react"
import {
  View
} from "react-native"
import {
  Fab
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/Feather"
import Ripple from "react-native-material-ripple"

import Button from "../common/RippleButton"

export default (props) => (
  <Button radius={50} active style={{
      height: 75,
      width: 75,
      borderRadius: 50,
      position: "absolute",
      bottom: 50,
      right: 25,
      overflow: "hidden",
      elevation: 5,
      margin: 5,
  }} onPress={props.onPress}>
    <Icon name="plus" size={30} color="#fff" />
    
  </Button>
)