import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,Picker,
  TouchableHighlight,ScrollView} from 'react-native';

import { Provider } from 'react-redux';
import Panel from './Panel'; 
import LinearGradient from 'react-native-linear-gradient';
import { Actions,PARAMS } from 'react-native-router-flux'
import { createStore } from 'redux';
import reducers from '../reducers';
import { Header } from './common';
import TagList from './TagList';
const { width, height } = Dimensions.get('window')

export default class AfterSignupScreen extends React.Component {

	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { language: "java" };
    this.state = { toggle:false}
  }

	// customizing navigation page options :title
	



  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

	render(){
		const {toggle} = this.state;
    const textValue = toggle?"ON":"OFF";
    const buttonBackground = toggle?"white":'transparent';
    const textColor = toggle?'#6D66AF':'white';
		const { goBack } = this.props.navigation;
    const { firstIntersetBtn, firstIntersetText,secondIntersetBtn } = styles;
    
    const { navigate } = this.props.navigation;

		return (
<LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >

		<ScrollView>
      <View style={{alignItems:'center'}}>
        <Text style={{ color:'white',fontWeight:'bold',fontSize:17,
        backgroundColor: 'transparent'}}>Welcome</Text>
      </View>

        <Panel title="Country">
          <View style={{ flexDirection: 'row'}}>
            <View>
              <TouchableOpacity 
                onPress={()=>this._onPress()}
                style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}
              >
              <Text style={[firstIntersetText,{color:textColor}]}>{textValue}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>{textValue}</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>{textValue}</Text>

              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
            </View>
          </View>
        </Panel>
        <Panel title="Profession">
          <View style={{ flexDirection: 'row'}}>
            <View>
              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
            </View>
          </View>
        </Panel>
        <Panel title="Interest">
          <View style={{ flexDirection: 'row'}}>
            <View>
              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[firstIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
              <TouchableOpacity style={[secondIntersetBtn,{backgroundColor:buttonBackground}]}>
              <Text style={[firstIntersetText,{color:textColor}]}>Hello</Text>

              </TouchableOpacity>
            </View>
          </View>
        </Panel>
        <TouchableHighlight
            
            style={styles.createNewAccountBtn}
            onPress={() => Actions.profiles(PARAMS)}
          > 
            <Text style={styles.createAccountTxt}>Create a new Account</Text>
          </TouchableHighlight>
      </ScrollView>
      </LinearGradient>
      
			);
	}

}

var styles = StyleSheet.create({
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
    
    width:width * 0.9,
    height:53.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountTxt:{
    
    fontWeight: 'bold',
    fontSize:16,
    color:'#935CAE',

  },

  firstIntersetBtn:{

    borderWidth: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:0,
    
    width:125,
    height:45.83,
    borderColor: '#fff',
    marginTop:38,
    marginBottom:19.17,
  },

  firstIntersetText:{
    marginTop:13.5,
    marginLeft:11.33,
    marginRight:13.67,
    marginBottom:13.33,


    fontWeight: 'bold',
    fontSize:16,
    color: 'black'
  },
  secondIntersetBtn:{

    borderWidth: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:19,
    
    width:125,
    height:45.83,
    borderColor: '#fff',
    marginTop:38,
    marginBottom:19.17,
  },
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});