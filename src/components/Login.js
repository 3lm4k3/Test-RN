/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  StatusBar,
  View
} from 'react-native';
import Infoslider from 'react-native-infoslider';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window')

export default class mawkaaTest extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data:[
          {
          title:"Hello World", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/1.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/2.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/3.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/4.jpg')},
          
      ]
    };
  }
  render() {
    return (
       <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Image
          source={require('./images/purpleBackground.png')}
          style={styles.imgBackground}
        />
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 100
          }}
          loop={false}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./images/1.jpg')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('./images/2.jpg')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('./images/3.jpg')} />
          </View>
        </Swiper>
        <TouchableHighlight
          style={styles.LoginButton}
          underlayColor='#fff'>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.LoginButton}
          underlayColor='#fff'>
          <Text style={styles.LoginButtonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'

  },
LoginButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:300,
    justifyContent: 'center',
    alignItems: 'center',

  },
  LoginButtonText:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height:500,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height:400,
  }
})

AppRegistry.registerComponent('mawkaaTest', () => mawkaaTest);
