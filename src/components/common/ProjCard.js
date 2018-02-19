import React from 'react';
import { View,Text,Image } from 'react-native';
import StarRating from './StarRating';

const ProjCard = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Image style={styles.image} source={props.icon} >
				<View style={{flexDirection:'row'}}>
					<Image style={styles.seenProj} source={require('../../assets/images/google.png')}></Image>
					<Text style={styles.seenNumText}>{props.seenNum}</Text>
					<Image style={styles.saveProj} source={require('../../assets/images/home.png')}></Image>
					
				</View>

			</Image>

			<Text style={styles.textStyle} >{props.headerText}</Text>
			<View style={{flexDirection:'row', marginLeft:18}}>
			<StarRating
				maxStars={5}
			    rating={props.ratingStars}
			    starSize={10}
			    selectStar={require('../../assets/images/select_star.png')}
			    unSelectStar={require('../../assets/images/unselect_star.png')}
			    valueChanged={this._valueChanged}

			    /><Text> </Text>
			    </View>
			
		</View>

		);
};

const styles = {
	containerStyle: {
		backgroundColor:'white',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:179,
		height:173,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	image:{
		backgroundColor:'grey',
		width:177,
		height:118,

	},
	seenProj:{
		width:12,
		height:19,
		marginTop:7.29,
		marginLeft:5,
		
	},
	saveProj:{
		width:12,
		height:19,
		marginLeft:115,
		marginTop:7.29,
		
		
		
	},
	seenNumText:{
		backgroundColor:'transparent',
		
		marginTop:7.29,
		marginLeft:3,
		paddingLeft:3,
		
		fontSize:12,
		fontWeight:'bold',
		color:'white'
	},
	textStyle:{
		backgroundColor:'transparent',
		
		marginTop:5,
		paddingLeft:18,
		
		fontSize:12,
		fontWeight:'bold',
		color:'#8A8A8F',
		
		
	},

};
export  {ProjCard};