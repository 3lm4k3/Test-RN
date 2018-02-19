import React from "react"
import {
  View,
  Text,
  StyleSheet
} from "react-native"
import {
  Button
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/Feather"
import Ripple from 'react-native-material-ripple';


import cstyles from "../common/style"

export default class PickerComponent extends React.Component {
  state = {
    list: [
      {
        key: "java",
        text: "Java"
      },
      {
        key: "javascript",
        text: "JavaScript"
      },
      {
        key: "php",
        text: "PHP"
      }
    ],
    selectedItem: 1,
    open: false
  }
  expand = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }
  handleSelection = (index) => {
    setTimeout(() => {
      this.setState({ selectedItem: index, open: false })
    }, 250);
  }
  render() {
    const { white, transBorder } = cstyles
    const { list, open, selectedItem } = this.state
    const { filled } = this.props
    return (
      <View>
        <LinearGradient style={[styles.container]} 
          start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}
          colors={ filled ? ['#5871B5', '#935CAE'] : ["#F7F7F7", "#F7F7F7"]}>
          <View>
            <Button onPress={this.expand} transparent style={[styles.indicator, filled && transBorder]} >
              <Text style={[styles.text, filled && white]} >{ list[selectedItem].text }</Text>
              <Icon name="chevron-down" size={30} color={filled ? "#fff" : "#935CAE"} />
            </Button>
          </View>
      </LinearGradient>
      { open && <View style={[styles.dropMenu]} >
        {
          list.map((el, index) => (
              <Ripple key={index} rippleColor="#fff" rippleDuration={1000} style={styles.menuItem}
                rippleContainerBorderRadius={23}  onPress={() => this.handleSelection(index)} >
                <LinearGradient colors={['#5871B5', '#935CAE']} style={{width: 140,  
                padding: 10,}}
                start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}>
                <Text data-key={el.key} style={styles.menuItemText} >{el.text}</Text>
                  
                </LinearGradient>
              </Ripple>
          ))
        }
      </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: 5 ,
    overflow: 'hidden',
  },
  indicator: {
    width: 150,
    padding: 10,
    borderWidth: 2,
    borderColor: '#935CAE',
    borderRadius: 5 ,
  },
  text: {
    color: "#935CAE",
    fontSize: 16, 
  },
  dropMenu: {
    width: 150,
    marginVertical: 5,
    position: "absolute",
    top: 50,
    borderRadius: 5,
    zIndex: 5
  },
  menuItem: {
    borderRadius: 23,
    width: 140,  
    margin: 5,
    overflow: "hidden",
    elevation: 5,
    
  },
  menuItemText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
})


