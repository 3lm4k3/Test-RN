import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,ScrollView,
  TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
import { Button,Card,CardSection,Input,Spinner,Checkbox } from './common';



export default class FirstScreen extends React.Component {

	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { checked: false };
  }

	// Setting the naviogation bar title
  
	
	render(){

    //close active screen and move back
		const { goBack } = this.props.navigation;
    
    const { navigate } = this.props.navigation;
		return (


			//setting the whole view back ground image
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >

          {/*
            I have an account login button
          */}
          <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
            
            style={styles.back}

            onPress={() => Actions.pop()}
          > 
            <Image
               source={require('../assets/images/prices.png')}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.headerText}>New Account</Text>
          </View>
          <View style={{justifyContent: 'center',
            alignItems: 'center',}}> 

          <TouchableOpacity
            
            style={styles.accountLoginBtn}

            onPress={() => goBack()}
          > 
            <Text
              style={styles.accountLoginText}

            >I have an Account Log in</Text>
          </TouchableOpacity>
          </View>

        {/*
          setting the divider line color
        */}
          <Divider style={{ backgroundColor: 'grey'}} />


          <Text style={styles.connectWith}>Connect with...</Text>
        {/*
        social login buttons container view*/}
          <View style={styles.socialLogin}>

            <TouchableOpacity
              
              style={styles.facebookLoginBtn}
              onPress={() => goBack()}
            > 
              {/*social media login icon*/}
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/facebook.png')}
            
              />
            </TouchableOpacity>
            <TouchableOpacity
              
              style={styles.linkedinLoginBtn}
              onPress={() => goBack()}
            > 
              
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/linkedin.png')}
            
              />
            </TouchableOpacity>

            <TouchableOpacity
              
              style={styles.googleLoginBtn}
              onPress={() => goBack()}
            > 
              
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/google.png')}
            
              />
            </TouchableOpacity>


          </View>



          <Text
            style={styles.accountInfo}
          >Account Info.</Text>

        {/*Signing up user details view container*/}

          <View
            style={styles.userDetailsSignUp}
            >
              <Input
                style={styles.firstNameStyle}
                
                placeholder="First Name"
                
              ></Input>

              <Input
                style={styles.lastNameStyle}
                
                placeholder="Last Name"
                
              ></Input>

              <Input
                style={styles.lastNameStyle}
                
                placeholder="E-mail"
                
              ></Input>

              <Input
                style={styles.lastNameStyle}
                
                placeholder="Password"
                
              ></Input>

            

          </View>

        {/*terms and conditions view container
        */}
          <View
            style={styles.termsNConditionsStyle}

            >


            {/*getting the checking state from the constructor state
                */}
              <Checkbox
                
                checked={this.state.checked}
              />
              <Text
                style={styles.termsNConditionsStyleTxt}
              > I Agree on terms & conditions</Text>
            </View>


            <View style={{justifyContent: 'center',
            alignItems: 'center',}}>
            <TouchableOpacity
            
            style={styles.createNewAccountBtn}
            onPress={() => Actions.home(PARAMS)}
          > 
            <Text style={styles.createAccountTxt}>Create a new Account</Text>
          </TouchableOpacity>
          </View>





          
          </ScrollView>
				
				 </LinearGradient>


			
			
			
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    


    backgroundColor:'transparent',

    
  },
  back:{
    marginLeft:20,
  },
  header:{
    marginTop:32,
    flexDirection:'row',

    
  },
  headerText:{
    fontWeight:"bold",
    fontSize:17,
    color:'white',
    marginLeft:width*0.15,



  },
  socialLogin: {
    flexDirection:'row',
    justifyContent: 'center',

  },
  socialLoginImage: {
    
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor:'white',
    
  },
  firstNameStyle:{
    marginBottom:10,
    marginTop:10,
    marginRight:10,
    marginLeft:10
  },
  lastNameStyle:{
    marginBottom:10,
    marginRight:10,
    marginLeft:10

  },
  userDetailsSignUp:{
    justifyContent: 'center',

    height:230,
  },
  termsNConditionsStyle:{

    flexDirection:'row',
  },
  accountLoginText:{

    fontWeight: 'bold',
    fontSize:16,
    color: 'white'
  },


  accountLoginBtn:{
    
    marginRight:17,
    marginLeft:16,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width: width * 0.8,
    height:53.34,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectWith:{
    marginTop:10,
    marginLeft:16,


    fontWeight: 'bold',
    fontSize:12,
    color: 'white'


  },
  accountInfo:{
    marginTop:22.08,
    marginLeft:16,
    

    fontWeight: 'bold',
    fontSize:22,
    color: '#FCFE80'


  },
  facebookLoginBtn:{
    backgroundColor:'white',
   
    marginLeft:34.5,
    marginTop:10,
    marginBottom:10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  linkedinLoginBtn:{
    backgroundColor:'white',
   
    marginLeft:18,

    marginTop:10,
    marginBottom:10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  googleLoginBtn:{
    backgroundColor:'white',
   
    marginLeft:18,
    marginRight:34.5,
    marginTop:10,
    marginBottom:10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  termsNConditionsStyle:{
    flexDirection:'row',


  },
  termsNConditionsStyleBtn:{
    marginTop:10,
    marginLeft:16,
  },
  createNewAccountBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:27,
    marginBottom:23.08,
    
    backgroundColor:'#FEE180',
    borderRadius:300,
    
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    
    width: width * 0.8,
    height:53.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountTxt:{
    color:'#935CAE',
    fontWeight: 'bold',
    fontSize:16,

  },
  termsNConditionsStyleTxt:{
    marginTop:10,
    marginLeft:16,


    fontWeight: 'normal',
    fontSize:12,
    color: 'white'
  },
  // rest of the styles
});


