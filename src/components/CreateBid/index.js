import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight
} from "react-native"
import {
  Input,
  Item,
  Button
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/Feather"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Ripple from "react-native-material-ripple"
import { Actions } from "react-native-router-flux"

import Header from "../Header/index"

import cstyles from "../common/style"


export default class CreateBid extends React.Component {
  state = {
    skills: [
    {
      text: "Skill name",
      active: false
    },
    {
      text: "Skill name",
      active: true
    },
    {
      text: "Skill name",
      active: false
    },
    {
      text: "Skill name",
      active: false
    },
    {
      text: "Skill name",
      active: false
    }
    ]
  }
  render() {
    const shadowOpt = {
      width:160,
      height:170,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
    }
    return (
      <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >
        <StatusBar
          backgroundColor="#5871B5"
          barStyle="light-content"
        />
        <KeyboardAwareScrollView bounces alwaysBounceVertical showsVerticalScrollIndicator={false} >
        <Header>
          <Button transparent style={cstyles.left} onPress={() => Actions.pop()} >
            <Icon name="arrow-left" size={30} color="#fff" />
          </Button>
          <View style={cstyles.right} >
            <Button transparent>
              <Text style={cstyles.white} >Save as draft</Text>
            </Button>
          </View>
        </Header>
        <View style={styles.content} >
          <Text style={styles.h3} >Create a Bid</Text>
          <Item style={styles.inputWrapper} >
            <Input placeholder="Bid Name" style={styles.input} tintColor="#fff"  placeholderTextColor="rgba(255,255,255,.75)" />
          </Item>
          <Item style={styles.inputWrapper} >
            <Input placeholder={`Duration "Range"`} style={styles.input} tintColor="#fff" placeholderTextColor="rgba(255,255,255,.75)" />
          </Item>
          <Item style={styles.inputWrapper} >
            <Input placeholder="Location" style={styles.input} tintColor="#fff" placeholderTextColor="rgba(255,255,255,.75)"/>
          </Item>
          <Item style={styles.inputWrapper} >
            <Input placeholder={`"Cost "Range"`} style={styles.input} tintColor="#fff" placeholderTextColor="rgba(255,255,255,.75)" />
          </Item>
          <View style={styles.skillsContainer} >
            <Text style={styles.h3} >Skills Required</Text>
            <View style={[cstyles.row, {flexWrap: "wrap"}]} >
              {
                this.state.skills.map((el, index) => (
                  <Ripple key={index} rippleColor={"#935CAE"} style={[styles.skill]} rippleContainerBorderRadius={5} rippleDuration={800} >
                    <View style={[styles.skillContent, el.active && {borderColor: "#935CAE", backgroundColor: "#fff", borderRadius: 5,}]}  >
                        <Text style={[{fontWeight: "bold", fontSize: 14, color: '#fff'}, el.active && {color: "#935CAE"}]} >{ el.text }</Text>
                    </View>
                  </Ripple>
                ))
              }
            </View>
          </View>
          <View >
            <Text style={styles.h3} >Project description</Text>
            <Item style={styles.inputWrapper} >
              <Input placeholder="Descripe your project" style={styles.input} tintColor="#fff" placeholderTextColor="rgba(255,255,255,.75)" />
            </Item>
          </View>
          <View >
            <Text style={styles.h3} >Project details</Text>
            <View style={styles.upload} >
            {/* <Dash style={{width:100, height:10}} dashColor="#fff" dashGap={10} */}
             {/* dashLength={15} dashThickness={2} /> */}
            
            </View>

          </View>
          
        </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
      
    ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10
  },
  h3: {
    color: "#FCFE80",
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10
  },
  inputWrapper: {
    marginBottom: 10
  },
  input: {
    color: '#fff'
  },
  skillsContainer: {
    marginTop: 15,
    marginBottom: 25
  },
  skill: {
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  skillContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
  },
  upload: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "dotted",
    padding: 25
  }
})