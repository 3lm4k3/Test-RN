import React from 'react';
import {
  View,
  Animated,
  Easing,
  Dimensions,
  TouchableHighlight
} from "react-native"
import { 
  Input
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import EstyleSheet from "react-native-extended-stylesheet"

export default class HeaderSearchBar extends React.Component {
  width = Dimensions.get("window").width
  handleFocus = () => {
    Animated.timing(animatedWidth, {
      toValue: this.width >= 750 ? 500 : 250,
      duration: 1000,
      easing: Easing.bounce
    }).start()

  }
  handleBlur = () => {
    Animated.timing(animatedWidth, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.color || "#E8E9EA"}]}>
        <TouchableHighlight underlayColor="transparent" onPress={() => this.refs.input._root.focus()} style={styles.wrapper}>
          <Animated.View style={[styles.inputWrapper, {width: animatedWidth}]}>
            <Icon name="search" size={25} style={styles.icon}/>
            <Input ref="input" onFocus={this.handleFocus} onBlur={this.handleBlur} placeholder="Search"
                   onChangeText={this.props.onChangeText} style={styles.input}/>
          </Animated.View>
        </TouchableHighlight>
      </View>
    )
  }
}

let animatedWidth = new Animated.Value(100)

const styles = EstyleSheet.create({
  container: {
    borderRadius: 23,
    height: 40,
    marginTop: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
  width: 250,
  alignItems: "center"
  },
  inputWrapper: {
    flexDirection: "row",
    height: 45,
  },
  input: {
    textAlign: "left",
    marginLeft: 35,
    marginTop: -3,
  },  
  icon: {
    left: 10,
    top: 10,
    position: "absolute",
  },
  '@media (min-width: 750) and (max-width: 1000)': { // media queries
    container: {
      width: 500
    },
    wrapper: {
      width: 500
    }
  }
  })