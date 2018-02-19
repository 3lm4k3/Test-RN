import React from "react"

import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from "react-native"
import { Button } from "native-base"
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"
import Ripple from 'react-native-material-ripple'

import Header from "../Header/index"
import Bid from "../Bid/index"
import Swiper from "../common/Swiper"
import ProposalsList from "../common/ProposalsList"


import cstyles from "../common/style"


export default class BidPage extends React.Component {
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
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor="#484848"
          barStyle="light-content"
        />
        <ParallaxScrollView
          backgroundColor="#5298DF"
          contentBackgroundColor="pink"
          parallaxHeaderHeight={450}
          showsVerticalScrollIndicator={false}
          renderForeground={() => (
           <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.overlay}>
                <Header style={styles.header} >
                  <View style={cstyles.left} >
                    <Icon name="arrow-left" size={30} color="#fff" />
                  </View>
                  <View style={cstyles.right} >
                    <Icon name="arrow-up" size={30} color="#fff" />                  
                  </View>
                </Header>
              </View>
              <Swiper/>
              <Text style={styles.price} >
                EGP 540,500
              </Text>
            </View>
          )}>
          
          <View style={styles.content}>
            <Bid seemore/>
            <View style={styles.skillsContainer} >
              <Text style={styles.subTitle} >Skills Required</Text>
              <View style={[cstyles.row, {flexWrap: "wrap"}]} >
                {
                  this.state.skills.map((el, index) => (
                    <Ripple key={index} rippleColor={"#935CAE"} style={[styles.skill, el.active && {elevation: 20}]} rippleContainerBorderRadius={5} rippleDuration={800} >
                      <LinearGradient start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}
                          colors={el.active ? ["#5871B5", "#935CAE"] : ["#fff", "#fff"]} style={[styles.skillContent, el.active && {borderColor: "#935CAE" } || {borderRadius: 5,}]}  >
                          <Text style={[{fontWeight: "bold", fontSize: 14}, el.active && cstyles.white]} >{ el.text }</Text>
                      </LinearGradient>
                    </Ripple>
                  ))
                }
              </View>
            </View>
            <Text style={styles.subTitle} >
              Bids Proposed
            </Text>
            <ProposalsList/>
            <View style={styles.footer} >
              <Button style={styles.yellowButton} >
                  <Text style={styles.yellowButtonText}>Place a Proposal</Text>
              </Button>
            </View>


          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    zIndex: 5
  },
  header: {
  },
  price: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    bottom: 25,
    left: 16
  },
  content: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 5
  },
  subTitle: {
    color: "#935CAE",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 15
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
    borderColor: "#484848",
    borderWidth: 2,
  },
  yellowButton: {
    backgroundColor: "#FEE180",
    borderRadius: 23,
    marginHorizontal: 25,
    marginVertical: 10,
    width: 350,
    justifyContent: "center",
    elevation: 2
  },
  yellowButtonText: {
    color: "#935CAE",
    fontSize: 16,
    fontWeight: "bold"
  },
})


