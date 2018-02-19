import React from 'react';
import {Text, View,StyleSheet,TouchableHighlight,
  Image,
  Dimensions,
  StatusBar,} from 'react-native';

import Swiper from 'react-native-swiper';
import { Actions,PARAMS } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')


export default class TakeTourScreen extends React.Component {

	// customizing navigation page options :title
	
	// Rendered screen elements
	render(){
		
		// using destructuring for navigation props to just call the props with navigate
		// insted of this.props.navigation. link to other screens
		const { navigate } = this.props.navigation;
		//the returned view to the renderer
		return (
		// container view for the entire inner elements
       <View style={styles.container}>

        <StatusBar barStyle='light-content' />
    	{
    	//adding an image to be the background for the swiped views 
    	}
        <Image
          source={require('../assets/images/purpleBackground.png')}
          style={styles.imgBackground}
        />
    	{
    		// Swiper container for the slide views
    	 

    	}
    {/*	slider container and dots styling paginationStyle is for the bottom margin to the 
		view
    */}
        <Swiper style={styles.wrapper}
    	
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
    
          paginationStyle={{
            bottom: 25
          }}
    
          loop={true}>
      {/* first Slide*/}
          <View style={styles.slide}>
            
          </View>
      {/* second Slide*/}
          <View style={styles.slide}>
            
          </View>
      {/* third Slide*/}
          <View style={styles.slide}>
            
          </View>
        </Swiper>
    {/* End of the swiper view */}
	{/* Login and Signup buttons for navigation through pages */}
        <TouchableHighlight
          style={styles.LoginButton}
          onPress={() => Actions.register(PARAMS)}
          
          underlayColor='#fff'>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.SignupButton}
          onPress={() => Actions.References(PARAMS)}
          underlayColor='#fff'>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
	}
}
{/* styling for the view elements*/}
var styles = StyleSheet.create({
	
  wrapper: {
    // backgroundColor: '#f00'

  },
LoginButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#8671AE',
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width:300,

    justifyContent: 'center',
    alignItems: 'center',

  },
  SignupButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#5279B1',
    borderRadius:300,
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
  signupButtonText:{
    justifyContent: 'center',
    alignItems: 'center',
    color:'black'
    
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
    height:450,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height:400,
  }
})



