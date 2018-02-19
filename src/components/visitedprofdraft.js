import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList} from 'react-native';

import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TagList from './components/TagList';
import reducers from './reducers';
import StarRating from 'mawkaaTest/src/components/common/StarRating';
import { Button,Card,Header,CategoryCard,ProjCard,CardSection,ContactCard,Input,Spinner,
  Checkbox } from '../src/components/common';
export default class VisitedProfileProjectsScreen extends React.Component {


	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    
    this.state = { wallToggle:false,aboutToggle:false,projectsToggle:true,moreToggle:false }
  }


  renderWall(wallToggle) {
  	if (wallToggle){
  		{()=>this._onPressProjects()}
  		{this.renderProjects(false)}
  		return(

  			<Text>Hello</Text>
  			);

  	}
  }
  renderProjects(projectsToggle) {
		
		if (projectsToggle){
			{()=>this._onPressWall()}
			
			return (
				
					<View style={{ flexDirection:'row'}}>
			        <FlatList
			        
			          data={[
			            {key:1,projName: 'new',seenNum:22,ratingStars:3},
			            {key:2,projName: 'Jackson',seenNum:10,ratingStars:2},
			            
			            
			          ]}
			          renderItem={({item}) => <ProjCard 
								icon={require('mawkaaTest/images/prices.png')}
								headerText={item.projName}
								seenNum={item.seenNum}
								ratingStars={item.ratingStars}
								>
								
								</ProjCard>
								
							}
			        />

			        <FlatList
			        
			          data={[
			            {key:3,projName: 'Devin',seenNum:4,ratingStars:4},
			            {key:4,projName: 'Jackson',seenNum:15,ratingStars:5},
			            
			            
			          ]}
			          renderItem={({item}) => <ProjCard 
								icon={require('mawkaaTest/images/prices.png')}
								headerText={item.projName}
								seenNum={item.seenNum}
								ratingStars={item.ratingStars}

								>
								
								</ProjCard>
								
							}
			        />

			        </View>
				

				);
		}
	}
	//

  _onPressWall(){
    const newWallState = !this.state.wallToggle;
    this.setState({wallToggle:newWallState})
  }
  _onPressAbout(){
    const newAboutState = !this.state.aboutToggle;
    this.setState({aboutToggle:newAboutState})
  }
  _onPressProjects(){
    const newProjectState = !this.state.projectsToggle;
    this.setState({projectsToggle:newProjectState})
  }
  _onPressMore(){
    const newMoreState = !this.state.moreToggle;
    this.setState({moreToggle:newMoreState})
  }

	render(){
		const {wallToggle,aboutToggle,projectsToggle,moreToggle} = this.state;
		const { title,ratings,subTitle,reviews,address } = this.props;
		const wallButtonBorder = wallToggle?"#FEE180":"transparent";
		const aboutButtonBorder = aboutToggle?"#FEE180":"transparent";
		const projectsButtonBorder = projectsToggle?"#FEE180":"transparent";
		const moreButtonBorder = moreToggle?"#FEE180":"transparent";

		const { projNum,projText,followersNum,followersText,
				followingNum,followingText,wallTxt,aboutTxt,projectsTxt,moreTxt,
			linearGradient,userName,yellowSeparator,whiteSeparator,
			userProfilePic,ratingStyle,profession,wallBtn,moreBtn,aboutBtn,projectsBtn,
			intro } = styles;
		return(

			<LinearGradient colors={['#5871B5', '#935CAE']} style={linearGradient}>
				<ScrollView style={{flex:1,marginBottom:5}}>
					<View style={intro}>
						<View>
							<Text style={userName}>Ebrahim Anwar</Text>
							<Text style={profession}>COO & Co-Founder at Handaz</Text>
							<View style={ratingStyle}>
								<StarRating
					                maxStars={5}
					                rating={4}
					                starSize={10}
					                selectStar={require('mawkaaTest/images/select_star.png')}
					                unSelectStar={require('mawkaaTest/images/unselect_star.png')}
					                valueChanged={this._valueChanged}


					              	/><Text style={{marginLeft:3,color:'white',backgroundColor:'transparent'}}>
					              		4.5
					              		</Text>
				            </View>
						</View>
						<Image style={userProfilePic} source={require('mawkaaTest/images/building.jpg')}></Image>

					</View>
					<View style={{flexDirection:'row'}}>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={projNum}>483</Text>
							<Text style={projText}>Projects</Text>
						</View>
						<Text style={yellowSeparator}>⎹</Text>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followersNum}>483</Text>
							<Text style={followersText}>Followers</Text>
						</View>
						<Text style={yellowSeparator}>⎹</Text>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followingNum}>483</Text>
							<Text style={followingText}>Following</Text>
						</View>
					</View>

					<View
			            style={{
			              borderBottomColor: '#FFFFFF',
			              borderBottomWidth: 1,
			              justifyContent: 'center',
			              marginLeft:16,
			              marginRight:16,
			              marginTop:8.5,
			            }}
			          />

			        <View style={{flexDirection:'row',marginTop:16}}>
			        	<TouchableOpacity 
			        	onPress={()=>this._onPressWall(),()=>this._onPressProjects()}
			        	style={[wallBtn,{borderBottomColor: wallButtonBorder,
								borderBottomWidth: 1}]}>
			        		<Text style={wallTxt}>Wall</Text>
			        	</TouchableOpacity>
			        	<Text 
			        	style={whiteSeparator}>⎹</Text>
			        	<TouchableOpacity 
			        	onPress={()=>this._onPressAbout()}
			        	style={[aboutBtn,{borderBottomColor: aboutButtonBorder,
								borderBottomWidth: 1}]}>
			        		<Text style={aboutTxt}>About</Text>
			        	</TouchableOpacity>
			        	<Text style={whiteSeparator}>⎹</Text>
			        	<TouchableOpacity 
			        	onPress={()=>this._onPressProjects(),()=>this._onPressWall()}
			        	style={[projectsBtn,{borderBottomColor: projectsButtonBorder,
								borderBottomWidth: 1}]}>
			        		<Text style={projectsTxt}>Projects</Text>
			        	</TouchableOpacity>
			        	<Text style={whiteSeparator}>⎹</Text>
			        	<TouchableOpacity 
			        	onPress={()=>this._onPressMore()}
			        	style={[moreBtn,{borderBottomColor: moreButtonBorder,
								borderBottomWidth: 1}]}>
			        		<Text style={moreTxt}>More</Text>
			        	</TouchableOpacity>

			        </View>
			        {this.renderProjects(projectsToggle)}
			        {this.renderWall(wallToggle)}
			        
			    </ScrollView>


			</LinearGradient>
			);
	}
}

const styles = { 
	linearGradient:{
		flex:1,
	    
	},
	projectsBtn:{
		marginLeft:18,
	},
	aboutBtn:{
		marginLeft:18,
	},
	moreBtn:{
		marginLeft:18,
	},
	wallBtn:{
		marginLeft:24,
		marginRight:11,
	},
	whiteSeparator:{
		color:'#FFFFFF',
		backgroundColor:'transparent',
		marginLeft:11,

	},
	wallTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',

	},
	aboutTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	projectsTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	moreTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	yellowSeparator:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		paddingTop: 10,
		fontSize:15,
	},
	projNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		marginLeft:45,
		marginRight:25,
	},
	projText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		marginLeft:52,
		marginRight:26,
	},
	followersNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		marginLeft:21,
		marginRight:25,
	},
	followersText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		marginLeft:29,
		marginRight:26,
	},
	followingNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		marginLeft:21,
		marginRight:25,
	},
	followingText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		marginLeft:29,
		marginRight:26,
	},


	userProfilePic:{
		width:91,
		height:91,
		borderRadius:45,
		marginLeft:15,

	},
	ratingStyle:{
		flexDirection:'row',
	},
	intro:{
		flexDirection:'row',
		marginTop:248,
		marginLeft:16,
	},
	userName:{
		backgroundColor:'transparent',
		fontWeight:'bold',
		color:'white',
		fontSize:32,
	},
	profession:{
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:12,
		color:'white',
	},

	};