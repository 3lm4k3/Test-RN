import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList,WebView} from 'react-native';
 import { Actions,PARAMS } from 'react-native-router-flux';
//  import Pdf from 'react-native-pdf';
 export default class PDFPage extends React.Component {
 	constructor(props) {
    super(props);
    
  }
 	render(){
 		const source = {uri:'http://www.pdf995.com/samples/pdf.pdf'};
 		const { viewStyle,back,download,downloadImage} = styles;
 		return(
 			<View style={{flex:1}}>
	 			<View style={viewStyle}>
						<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
		          		

		          		<TouchableOpacity
		            
				            style={download}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				               

				            >
				            </Image>
		          		</TouchableOpacity>
					</View>
 				 <WebView
		          source={{uri:this.props.pdfLink}}
		         
		          style={{marginTop: 20,width:342,marginLeft:16,marginBottom:19}}
		        />
 			</View>
 			);
 	}
 }
 const styles = {
	viewStyle: {
		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#F7F7F7',
		
		flexDirection:'row',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	back:{
		width:188,
		height:44,
	},
	download:{
		width:188,
		height:44,
		paddingLeft:125,

	},

}