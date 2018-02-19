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

import Tabs from "./common/Tabs";
import Post from "./Post/index";
import {
  Button,
  Thumbnail,
  Tab,TabHeading,
  Footer,
  FooterTab} from "native-base";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TagList from './TagList';
import reducers from '../reducers';
import StarRating from './common/StarRating';
import { Card,Header,CategoryCard,ProjCard,CardSection,ContactCard,Input,Spinner,
  Checkbox } from './common';
const { width, height } = Dimensions.get('window')
export default class VisitedProfileProjectsScreen extends React.Component {


	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    
    this.state = { userOnline:true,wallToggle:false,aboutToggle:false,projectsToggle:true,moreToggle:false }
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
								icon={require('../assets/images/prices.png')}
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
								icon={require('../assets/images/prices.png')}
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
  _onlineIndicator(userOnline){
  	if(userOnline){
  		return(
  			<Image style={{width:18,height:18,marginTop:-20,marginRight:10}} source={require('../assets/images/prices.png')}></Image>
  		);
  	}
  }

	render(){
		const {wallToggle,aboutToggle,projectsToggle,moreToggle,userOnline} = this.state;
		const { title,ratings,subTitle,reviews,address } = this.props;
		const wallButtonBorder = wallToggle?"#FEE180":"transparent";
		const aboutButtonBorder = aboutToggle?"#FEE180":"transparent";
		const projectsButtonBorder = projectsToggle?"#FEE180":"transparent";
		const moreButtonBorder = moreToggle?"#FEE180":"transparent";

		const { projNum,projText,followersNum,followersText,
				followingNum,followingText,wallTxt,aboutTxt,projectsTxt,moreTxt,
			linearGradient,userName,yellowSeparator,whiteSeparator,
			userProfilePic,ratingStyle,profession,wallBtn,moreBtn,aboutBtn,projectsBtn,
			intro,addressPointsTitle,actualAddress,points,tabsText } = styles;
		return(

			<LinearGradient colors={['#5871B5', '#935CAE']} style={linearGradient}>
				<ScrollView>
					<TouchableOpacity
            
            style={styles.back}

            onPress={() => Actions.pop()}
          > 
          <Image
               source={require('../assets/images/prices.png')}
            ></Image>
          </TouchableOpacity>
					<View style={intro}>
						<View>
							<Text style={userName}>Ebrahim Anwar</Text>
							<Text style={profession}>COO & Co-Founder at Handaz</Text>
							<View style={ratingStyle}>
								<StarRating
					                maxStars={5}
					                rating={4}
					                starSize={10}
					                selectStar={require('../assets/images/select_star.png')}
					                unSelectStar={require('../assets/images/unselect_star.png')}
					                valueChanged={this._valueChanged}


					              	/><Text style={{marginLeft:3,color:'white',backgroundColor:'transparent'}}>
					              		4.5
					              		</Text>
				            </View>
						</View>
						<View style={{alignItems:'flex-end'}}>
							<Thumbnail large source={require('../assets/images/building.jpg')}>

							</Thumbnail>
							{this._onlineIndicator(userOnline)}
							
						</View>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:16}}>
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

			        
			        <Tabs transparent={true} style={{justifyContent:'space-around',marginLeft:16}}>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Wall</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<Post/>
							<Post sponsored={true}/>
							    
						    <Post sponsored={true}/>
						    <Post selling={true}/>
			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>About</Text></TabHeading>} style={{ backgroundColor:'transparent'}}>
			        		<Text style={addressPointsTitle}>Address</Text>
			        		<Text style={actualAddress}>Address goes here,Cairo,Egypt</Text>
			        		<Text style={addressPointsTitle}>Budget & Points</Text>
			        		<View style={{flexDirection:'row'}}>
			        			<Text style={points}>34,509</Text>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        		</View>

			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Projects</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<View style={{ flexDirection:'row'}}>
						        <FlatList
						        	
						          data={[
						            {key:1,projName: 'new',seenNum:22,ratingStars:3},
						            {key:2,projName: 'Jackson',seenNum:10,ratingStars:2},
						            
						            
						          ]}
						          renderItem={({item}) => <ProjCard 
											icon={require('../assets/images/prices.png')}
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
											icon={require('../assets/images/prices.png')}
											headerText={item.projName}
											seenNum={item.seenNum}
											ratingStars={item.ratingStars}

											>
											
											</ProjCard>
											
										}
						        />


						        

						        </View>
						        

			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>More</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<Text>qq</Text>
			        	</Tab>
			        </Tabs>
			        
			        
			        
			    </ScrollView>


			</LinearGradient>
			);
	}
}

const styles = { 
	linearGradient:{
		flex:1,
	    
	},
	back:{
		marginTop:20,
	},
	addressPointsTitle:{
		fontWeight:'bold',
		fontSize:22,
		marginLeft:16,
		marginTop:29,
		marginBottom:16,
		color:'#FCFE80',
		backgroundColor:'transparent'
	},
	actualAddress:{
		fontWeight:'normal',
		fontSize:14,
		marginLeft:16,
		color:'white',
		backgroundColor:'transparent',
		
		textDecorationLine: 'underline',
		shadowOffset: { width: 0, height: 1 },
	},
	tabsText:{
		backgroundColor:'transparent',
		color:'white',
		fontSize:20,
		fontWeight:'normal',
	},
	points:{
		fontWeight:'bold',
		fontSize:34,
		color:'white',
		backgroundColor:'transparent',
		marginLeft:16,
		marginRight:75,
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
		
	},
	projText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},
	followersNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		
	},
	followersText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},
	followingNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		
	},
	followingText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},


	userProfilePic:{
		width:width*0.24,
		height:width*0.24,
		borderRadius:width*0.12,
		marginLeft:15,

	},
	ratingStyle:{
		flexDirection:'row',
	},
	intro:{
		flexDirection:'row',
		justifyContent: "space-between",
		marginTop:height * 0.3,
		marginLeft:16,
		marginRight:16,
		
	},
	userName:{
		backgroundColor:'transparent',
		fontWeight:'bold',
		color:'white',
		fontSize:32,
		marginBottom:2.5,

	},
	profession:{
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:12,
		color:'white',
		marginBottom:7.25,
	},

	};