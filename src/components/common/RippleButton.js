import React from "react"
import {
  View, 
  Text,
  TouchableWithoutFeedback
} from "react-native"
import Ripple from "react-native-material-ripple"
import LinearGradient from "react-native-linear-gradient"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import cstyles from "../common/style"
import style from '../NewsFeed/styles';

const { row, spaceBetween, center, bold } = cstyles

export default (props) => {
  let { children, text, rippleColor, onPress, active, radius, style } = props
  const activeColor = props.activeColor || ['#5871B5', '#935CAE']
  let defaultColor = props.defaultColor || ["#fff", "#fff"]
  if(props.transparent) defaultColor = ["transparent", "transparent"]
  radius = props.radius || 5
  
  const styles = {
    backgroundColor: 'transparent', 
    borderRadius: 23, 
    flex:1, 
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 20
    
  }
  const buttonWrapper = {
    borderRadius: radius,
    flex: style && 1,

  }
  
  return (
    <View style={style || {elevation: 3, margin: 5, borderRadius: radius}} >
      <LinearGradient  colors={active ? activeColor : defaultColor}
        start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}} style={buttonWrapper} >
        <Ripple rippleContainerBorderRadius={radius} onPress={onPress} rippleDuration={800} rippleColor={rippleColor} style={[styles, style && center]} >
          {
            children ? children : 
            <View style={[row, center, {flex: 1}] }>
              <FontAwesome name="photo" size={25} color={active ? "#fff" : "#B334C4"} />
              <Text style={[bold, { marginHorizontal: 10, color: active ? "#fff" : "#B334C4"}]}>{text}</Text>
            </View>
          }
        </Ripple>
      </LinearGradient>
    </View>
  )
}

