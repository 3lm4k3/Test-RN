import React from 'react';
import { TextInput,View,Text } from 'react-native';

const Input = (props) => {
	const { label,value,onChangeText,placeholder,secureTextEntry } = props
	const {inputStyle,labelStyle,containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
			<View
            style={{
              borderBottomColor: '#FCFE80',
              borderBottomWidth: 1,
              justifyContent: 'center',
              marginLeft:16,
              marginRight:17
            }}
          />
		</View>
		);

};

const styles = {
	inputStyle: {
		color: '#FCFE80',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight:1,
		flex:1,
		height: 10,
		marginLeft:16
		
	},
	labelStyle: {
		color:'#FCFE80',
		fontSize:18,
		paddingLeft:20,
		flex: 1
	},
	containerStyle: {
		height: 10,
		flex: 1,

	}
};
export { Input };