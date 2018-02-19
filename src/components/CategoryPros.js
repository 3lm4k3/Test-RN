import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TagList from './TagList';
import reducers from '../reducers';


import { Button,Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
export default class CategoryProsScreen extends React.Component {
	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { language: "java" };
    this.state = { filterToggle:true,sortToggle:false }
  }

  _onPressFilter(){
    const newFilterState = !this.state.filterToggle;
    this.setState({filterToggle:newFilterState})
  }
  _onPressSort(){
  	const newSortState = !this.state.sortToggle;
    this.setState({sortToggle:newSortState})
  }
	render(){
		const {filterToggle,sortToggle} = this.state;

	    const filterTextValue = "Filter    ٧";
	    const filterButtonBackground = filterToggle?"transparent":"#F7F7F7";
	    const filterTextColor = filterToggle?'white':'#6D66AF';

	    const sortTextValue = "Sort    ٧";
	    const sortButtonBackground = sortToggle?"transparent":"#F7F7F7";
	    const sortTextColor = sortToggle?'white':'#6D66AF';

		const { textStyle,viewStyle,back,search,title,
				firstIntersetBtn, 
				firstIntersetText } = styles;
		
		return(
			<View style={{ backgroundColor:'white',flex:1}}>
				<View style={viewStyle}>
					<View style={{ flexDirection:'row'}}>
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
	          		<View style={{flexDirection:'row'}}>
		          		<LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}>
			          		<TouchableOpacity 
				                onPress={()=>this._onPressFilter()}
				                style={[firstIntersetBtn,{backgroundColor:filterButtonBackground}]}
				              >
				              <Text style={[firstIntersetText,{color:filterTextColor}]}>{filterTextValue}</Text>

				            </TouchableOpacity>
				        </LinearGradient>

				        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}>
			          		<TouchableOpacity 
				                onPress={()=>this._onPressSort()}
				                style={[firstIntersetBtn,{backgroundColor:sortButtonBackground}]}
				              >
				              <Text style={[firstIntersetText,{color:sortTextColor}]}>{sortTextValue}</Text>

				            </TouchableOpacity>
				        </LinearGradient>
			        </View>

				</View>
				<ScrollView>
					<Text style={title}>Our Pros.</Text>
					<View style={{ flex: 1,marginTop:10}}>
                
                <TagList />
              </View>
				</ScrollView>



			</View>

			);
	}
}

const styles = {
	viewStyle: {
		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#F7F7F7',

		
		height: 115,
		paddingTop: 15,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
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
	linearGradient:{
		
		borderRadius: 5,
    	width:108,
	    height:29,
	    marginTop:10,
	    marginBottom:5,
	    marginLeft:18,
	    

	    
	},
  	firstIntersetBtn:{

	    borderWidth: 1,
	    borderRadius:5,
	    justifyContent: 'center',
	    alignItems: 'center',
	    
	    
	    width:108,
	    height:29,
	    borderColor: '#fff',
	    
	  },

  	firstIntersetText:{
	    


	    fontWeight: 'bold',
	    fontSize:16,
	    color: 'black'
	  },
	title:{
		fontWeight:'bold',
		fontSize:22,
		color:'#935CAE',
		marginTop:27,
		marginLeft:16,
		backgroundColor:'white',
		width:147,
		height:26,
	},
	back:{
	marginTop:10,
    marginLeft:18,
    marginRight:18,
  },
	textStyle:{
		fontSize: 20
	}
};
