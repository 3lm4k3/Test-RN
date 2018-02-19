import React from "react"
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native"
import Lightbox from 'react-native-lightbox';
import Icon from "react-native-vector-icons/Feather"

export default class ImagePreview extends React.Component {
  state = {

  }
  onClose =  () => {
    this.props.onClose()
  } 
  render() {
    const { source, navigator, style } = this.props
    return (
      <Lightbox navigator={navigator}
        renderHeader={(close) => (
          <View>
            <StatusBar
              backgroundColor="#000"
              barStyle="light-content"
            />
            <TouchableOpacity onPress={close}>
              <Icon name="x" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
          )}>
          <Image style={{ height: 300 }} source={source} />
        </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  }
})