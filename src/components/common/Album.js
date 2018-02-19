import React from "react"

import {
  View,
  StyleSheet,
  Text
} from "react-native"

import Image from "./Image";

import cstyles from "../common/style"

export default class Album extends React.Component {
  render() {
    const { bold, white, center} = cstyles
    const imagesList = [1,2,3,4,5,6,7,8,9]
    const { firstImage, lastImage } = styles
    return(
      <View style={styles.container} >
        <View style={styles.upperSection} >
          <Image source={{uri: "https://picsum.photos/200/300/?random" }} style={[firstImage, {width: null, flex: 1}]}/>
        </View>
        <View style={styles.lowerSection} >
          {
            imagesList.slice(1).slice(0,2).map((el, index) => {
              return (
                <View style={styles.lowerSectionImage} key={index} >
                  <Image source={{uri: "https://picsum.photos/200/300/?image=" + index }} style={{width: null, flex: 1}}/>
                </View>
              )
            })
          }
          <View style={styles.lowerSectionImage}>
            <Image source={{uri: "https://picsum.photos/200/300/?random" }} style={[lastImage, {width: null, flex: 1}]}/>
            <View style={[styles.overlay, center]}>
              <Text style={[white, bold, {fontSize: 28, zIndex: 2}]} >
                +6
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    flex: 1
  },
  imageWrapper: {
    flex: 1
  },
  firstImage: {
    marginLeft: 0
  },
  lastImage: {
    marginRight: 0
  },
  lowerSection: {
    flexDirection: 'row',
    flex: 2,
  },
  lowerSectionImage: {
    flex: 1,
    margin: 2
  },
  upperSection: {
    flex: 4,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left:0,
    right:0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
})