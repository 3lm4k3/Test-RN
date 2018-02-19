import React from "react"
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from "react-native"
import {
  Thumbnail,
  Input,
  // Button,
  Item
} from "native-base"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import Ripple from "react-native-material-ripple"
import LinearGradient from "react-native-linear-gradient"
import ImagePicker from "react-native-image-picker"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import EStyleSheet from 'react-native-extended-stylesheet';


import Divider from "../common/Divider"
import Button from "../common/RippleButton"

import cstyles from "../common/style"

const { row, spaceBetween, center } = cstyles

export default class NewStatus extends React.Component {
  state = {
    postText: "",
    postType: "",
  }
  handlePress = (type) => {
    if(type === "photo") {  
      // More info on all the options is below in the README...just some common use cases shown here
      const options = {
        title: 'Select Avatar',
        customButtons: [
          {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
      /**
       * The first arg is the options object for customization (it can also be null or omitted for default options),
       * The second arg is the callback which sends object: response (more info below in README)
       */
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            avatarSource: source
          });
        }
      });
    }else {
      if(type !== this.state.postType) {
        this.setState({
          postType: type
        })
      }else {
        this.setState({
          postType: ""
        })
      }
    }
  }
  handlePosting = () => {
    
  }
  componentDidUpdate(prevProps, prevState) {
    const { postType, postText } = this.state
    
  }
  _onChange = text => {    
    this.setState({ postText: text })
  }
  render() {
    const { postType, postText } = this.state
    return (
      <View style={styles.container}>
        <View style={[row, { padding: 15 }]}>
          <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
          <AutoGrowingTextInput
              style={styles.textInput}
              placeholder={"What's in your mind?"}
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={50}
              enableScrollToCaret
              underlineColorAndroid="transparent"
              onChangeText={this._onChange}
            />
        </View>   
        {
          postType === "selling" &&
          <View>
            <Divider color="#D0D1D2"/> 
            <View>
              <View style={styles.inputWrapper} >
                <Item style={{flex: 1}} >
                  <Input placeholder='Product Name'/>
                </Item>
              </View>
              <View style={styles.inputWrapper} >
                <Item style={{flex: 1}} >
                  <Input placeholder='Price' keyboardType="numeric" />
                </Item>
              </View>
            </View>
          </View>
        }
        <Divider color="#D0D1D2"/> 
        <View style={[row, spaceBetween, { paddingHorizontal: 5, paddingVertical: 10}]} >
          <Button radius={23} onPress={() => this.handlePress("photo")} active={postType === "photo"}
            text="Photo" />
          <Button radius={23} onPress={() => this.handlePress("video")} active={postType === "video"}
            text="Video" />
          <Button radius={23} onPress={() => this.handlePress("selling")} active={postType === "selling"}
            text="Selling" />
        </View>
        {/* Post Button */}
        {
            Boolean(postText) &&
            <View>
              <Divider color="#D0D1D2"/> 
              <Ripple style={styles.postButton} onPress={this.handlePosting} 
                rippleContainerBorderRadius={10} rippleDuration={800} >
                <LinearGradient colors={['#5871B5', '#935CAE']} start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}
                  style={[styles.postOptions, row, center, { borderRadius: 5, marginRight: 0}]} >
                  <Text style={{marginHorizontal: 10, color:"#fff", fontSize: 18, fontWeight: "bold"}}>Post</Text>
                </LinearGradient>
              </Ripple>
            </View>
        }
      </View>
    )
  }
}
  
  


const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    marginVertical: 25,
  },
  postButton: {
    marginVertical: 10,
    marginHorizontal: 35,
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    borderWidth: 0,
  },
  inputWrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10
  },
  postOptions: {
    backgroundColor: 'transparent', 
    borderRadius: 23, 
    flex:1, 
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 50
  },
  '@media (min-width: 750) and (max-width: 1000)': { // media queries
    container: {
      paddingHorizontal: 100,
    }
  }
})
