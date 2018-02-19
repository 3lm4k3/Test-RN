import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar
} from "react-native"
import {
  Drawer,
  Thumbnail
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Ripple from "react-native-material-ripple"
import Icon from "react-native-vector-icons/Feather"
import IonIcons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import cstyles from "../common/style"
import Divider from "../common/Divider";
import Button from "../common/RippleButton";

const { bold } = cstyles

export default class SideBar extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <LinearGradient colors={['#5871B5', "#935CAE"]} style={styles.container} >
        <View style={styles.profile} >
          <Thumbnail source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"}} style={styles.thumbnail} />
          <Text style={[bold, {color: "#FCFE80", fontSize: 16}]}>Mohamed El Raddaf</Text>
          <Text style={{fontSize: 12,color: "#fff"}} >UI - UX Art Director</Text>
          <Icon name="more-horizontal" size={20} color="#fff" style={styles.profileIcon} />
        </View>
        <View style={styles.list}>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
              <IonIcons name="ios-heart" size={30} color="#fff"  />
              <Text style={styles.listItemText} >Change interests</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <Icon name="help-circle" size={30} color="#fff"  />
            <Text style={styles.listItemText} >How it is work</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <IonIcons name="ios-globe-outline" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Country and language</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >          
            <FontAwesome name="star" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Rate our app</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <IonIcons name="md-share" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Share with friends</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <IonIcons name="ios-call" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Call us</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <MaterialCommunityIcons name="comment-text" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Leave a feedback</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <IonIcons name="ios-checkmark-circle" size={30} color="#fff"  />
            <Text style={styles.listItemText} >Terms & Condition</Text>
          </Ripple>
        </View>
        <Divider style={{marginLeft: -25}} /> 
        <View style={styles.footer} >
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <IonIcons name="ios-moon" size={30} color="#fff" />
            <Text style={[styles.listItemText, {marginLeft: 15}]} >Night Mode</Text>
          </Ripple>
          <Ripple rippleContainerBorderRadius={5} rippleDuration={800} style={styles.listItem} >
            <Icon name="power" size={30} color="#fff" />
            <Text style={[styles.listItemText, {marginLeft: 10}]} >Log Out</Text>
          </Ripple>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16
  },
  profile: {

  },
  thumbnail: {
    marginBottom: 10
  },
  profileIcon: {
    position: "absolute",
    right: 5,
    top: 5
  },
  list: {
    marginVertical: 10
  },
  listItem: {
    flexDirection: "row",
    height: 50,
    // justifyContent: "center",
    alignItems: "center"
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 25,
    lineHeight: 30
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  }
})