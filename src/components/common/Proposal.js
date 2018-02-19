import React from "react"
import {
  View,
  StyleSheet,
  Text
} from "react-native"
import {
  Thumbnail,
  Button
} from "native-base"
import Fixed5Stars from "./Fixed5Stars"

export default () => (
  <View style={styles.container} >
    <Button transparent >
      <Thumbnail style={styles.thumbnail} source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
    </Button> 
    <View>
      <Text style={styles.title} >Hany Saad Innovations</Text>
      <Text style={styles.Subtitle} >Innocvaton, Creative, Interior Design</Text>
      <View style={styles.reviews} >
      <Fixed5Stars/>
      <Text style={{ color: "#484848", marginLeft: 20, marginTop: 3 }}>20 reviews</Text>
      </View>
    </View>
    <View>
      <Text style={styles.price} >EGP 500,000</Text>
      <Text style={styles.period} >in 2 weeks</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  thumbnail: {
    height: 45,
    width: 45
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,

  }, 
  Subtitle: {
    color: "lightgray"
  },
  reviews: {
    flexDirection: "row",
  },
  price: {
    color: "#935CAE",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right"
  },
  period: {
    color: "#5871B5",
    textAlign: "right"
  }
})