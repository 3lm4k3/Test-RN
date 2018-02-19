import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import range from "lodash.range"
import Icon from "react-native-vector-icons/Feather"

import Header from "../Header/index"
import Button from "../common/RippleButton"

import styles from "./styles"

export default class Calculator extends React.Component {
  state = {
    screenText: ""
  }
  handleButtonPress = (text) => {
    const { screenText } = this.state
    if(text === "."){
      if(!(screenText.contains("."))) {
        this.setState(state => ({
          screenText: state.screenText + text
        }))
      }
    }else {
      this.setState(state => ({
        screenText: state.screenText + text
      }))
    }
  }
  handleBackSpace = () => {
    this.setState(state => {
      return ({
        screenText: state.screenText.slice(0, state.screenText.length - 1)
      })
    })
  }
  componentDidMount() {
    console.log(this.props);
    
  }
  render() {
    const { screenText } = this.state
    return (
      <LinearGradient style={styles.container} colors={['#5871B5', '#935CAE']}>
        <StatusBar
          backgroundColor="#5871B5"
          barStyle="light-content"
        />
        <View style={styles.screen} >
          <Header>
            <Button transparent style={{position: "absolute", left: 0}} >
              <Icon name="arrow-left" size={30} color="#fff"/>              
            </Button>
          </Header>
          <Text style={styles.subTitle} >Flat Slab</Text>
          <View style={styles.results} >
            <View style={styles.resultsRow} >
              <Text style={styles.resultsLeftText} >Steel Quantity (Kg)=</Text>
              <Text style={styles.resultsRightText} >{ (Number(screenText) * 2) || ""  }</Text> 
            </View>
            <View style={styles.resultsRow} >
              <Text style={styles.resultsLeftText} >Gravel (m3)=</Text>
              <Text style={styles.resultsRightText} >{ (Number(screenText) * 3) || ""  }</Text> 
            </View>
            <View style={styles.resultsRow} >
              <Text style={styles.resultsLeftText} >Sand (m3)=</Text>
              <Text style={styles.resultsRightText} >{ (Number(screenText) * 4) || ""  }</Text> 
            </View>
            <View style={styles.resultsRow} >
              <Text style={styles.resultsLeftText} >Cement (Ton)=</Text>
              <Text style={styles.resultsRightText} >{ (Number(screenText) * 5) || ""  }</Text> 
            </View>
          </View>
          <View style={styles.result} >
            {
              screenText ? <Text style={styles.resultText} >{ screenText }</Text> :
              <Text style={{fontSize: 16}} >Ceiling Area (m2)</Text>
            }
          </View>
        </View>
        <View style={styles.keyboard} >
          <View style={styles.left} >
          {
              range(0, 10, 1).reverse().map((num, index) => {
                if(num === 0) {
                  return (
                    <View style={{flexDirection: "row"}} key={index} >
                      <TouchableOpacity onPress={() => this.handleButtonPress(num)} style={[styles.button, {width: 170}]}>
                        <Text style={styles.buttonText} >{ num }</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handleButtonPress(".")} style={[styles.button]}>
                        <Text style={styles.buttonText} >.</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
                return (
                  <TouchableOpacity onPress={() => this.handleButtonPress(num)} key={index} style={[styles.button]}>
                    <Text style={styles.buttonText} >{ num }</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={[styles.button]} onPress={this.handleBackSpace}>
              <Icon name="arrow-left" size={30} color="#484848" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {flex: 1}]}>
              <Icon name="zap" size={30} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    )
  }
}
