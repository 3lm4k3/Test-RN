import React from 'react';
import { View,Text,Image } from 'react-native';
import StarRating from './StarRating';

const CategoryCard = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Image style={styles.image} source={props.icon} ></Image>
			<Text style={styles.textStyle} >{props.headerText}</Text>
			<StarRating
				maxStars={5}
			    rating={props.ratingStars}
			    starSize={10}
			    selectStar={require('../../assets/images/select_star.png')}
			    unSelectStar={require('../../assets/images/unselect_star.png')}
			    valueChanged={this._valueChanged}

			    />
			
		</View>

		);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:161,
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
		backgroundColor:'#95989A',
		width:159,
		height:120,

	},
	textStyle:{
		backgroundColor:'white',
		width:88,
		height:14,
		marginTop:5,
		paddingLeft:18,
		paddingBottom:26,
		fontSize:12,
		fontWeight:'bold',
		color:'#8A8A8F',
		width:159,
		height:38,
		
	},

};
export  {CategoryCard};