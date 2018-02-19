import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PDFList from './PDFList';
import reducers from '../reducers';


import { Button,Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
export default class ReferencesScreen extends React.Component {

	render(){
		const { textStyle,viewStyle,back,search,title,referenceType,executionTitle } = styles;
		return(
			<View style={{ backgroundColor:'white',flex:1}}>
				<View style={viewStyle}>
					<View style={{flexDirection:'row'}}>
						<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
		          		<TextInput 
		          			placeholder="🕵️Search"
		          			style={search}></TextInput>

		          		<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
					</View>

					<Text style={referenceType}>Execution</Text>


				</View>
				

				<ScrollView>
					
					<View style={{ flex: 1,marginTop:10,marginLeft:16,flexDirection:'row'}}>
                
		                <PDFList />
		                <PDFList />
              		</View>
				</ScrollView>

			</View>

			);
	}
}

const styles = {
	viewStyle: {
		
		
		
		backgroundColor:'#F7F7F7',
		
		
		height: 140,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	back:{
	marginTop:10,
    marginLeft:18,
    marginRight:18,
  },
  executionTitle:{
  	fontWeight:'bold',
  	fontSize:25,
  	backgroundColor:'transparent',
  	color:'white',

  },
  referenceType:{
  	fontSize:34,
  	fontWeight:'bold',
  	color:'#935CAE',
  	backgroundColor:'transparent',
  	marginLeft:16,
  	marginTop:24,
  },
	search:{
		backgroundColor:'#E8E9EA',
		marginBottom:10,
		flex:1,
		
		
		borderRadius:19,
		marginTop:10,
		alignItems:'center',
		flex: 1, 
		textAlign: 'center',
		width:254,
		height:32.4,


		lineHeight:1,
		fontSize: 18,
		color: 'black',
	},
	

}