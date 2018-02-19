import React from "react"
import {
  View,
  Image,
  StyleSheet
} from "react-native"
import Swiper from 'react-native-swiper';
import range from "lodash.range"


export default () => (
      <View style={styles.wrapper} >
      <Swiper autoplay={true} showsButtons={true} paginationStyle={{marginBottom: -20}} dotColor={"rgba(255,255,255,0.75)"} activeDotStyle={styles.activeDot}  >
          <View style={styles.slide}>
            <Image style={{resizeMode: "cover", flex: 1}} source={require("../../assets/images/unfinished-villa.jpg")}/>                          
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: "cover", flex: 1}} source={require("../../assets/images/unfinished-villa.jpg")}/>                          
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: "cover", flex: 1}} source={require("../../assets/images/unfinished-villa.jpg")}/>                          
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: "cover", flex: 1}} source={require("../../assets/images/unfinished-villa.jpg")}/>                          
          </View>
          <View style={styles.slide}>
            <Image style={{resizeMode: "cover", flex: 1}} source={require("../../assets/images/unfinished-villa.jpg")}/>                          
          </View>
        </Swiper>
      </View>
    )

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 500
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  activeDot: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
  }
})