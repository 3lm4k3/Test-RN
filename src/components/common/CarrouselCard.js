import React from "react"

import {
  View, 
  Image, 
  Text,
  StyleSheet
} from 'react-native';

export default (props) => {
  return (
      <View style={ styles.container }>
          <View style={ [styles.imgWrapper, { backgroundColor: props.color }] } >
            {/* <Image source={} /> */}
          </View>
          <View style={ styles.meta } >
            <Text style={ styles.metaText } >{ props.title }</Text>
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  imgWrapper: {
    height: 100,
    width: 150,
    elevation: 3,
  },
  meta: {
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 5,
    paddingVertical: 16,
    elevation: 3,
    
  },
  metaText: {
    color: "#8A8A8F",
    fontWeight: "bold"
  }
})
