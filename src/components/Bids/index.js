import React from "react"
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  Dimensions
} from "react-native"
import {
  Button,
  Thumbnail,
  Tab,
  Footer,
  FooterTab,
  Drawer
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import { Actions, ActionConst } from "react-native-router-flux"

import Header from "../Header/index"
import BidPage from "../BidPage/index"
import SearchBar from "../common/HeaderSearchBar"
import SubNavBar from "../common/SubNavBar"
import Picker from "../common/Picker"
import Tabs from "../common/Tabs"
import Fab from "../common/Fab"
import Bid from "../Bid/index"
import SideBar from "../SideBar/index"
import AutoLoadList from "../common/AutoLoadList"

import cstyles from "../common/style.js"


export default class Bids extends React.Component {
  state = {
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  toggleDrawer = () => {
    // if()
  }
  render() {
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.props.navigator} />}
      onClose={() => this.closeDrawer()} >
        <View style={cstyles.container} >
          <StatusBar
            backgroundColor="#F7F7F7"
            barStyle="dark-content"
          />
          <Header color="#F7F7F7" >
            <View style={cstyles.left} >
              <Button transparent onPress={this.openDrawer}>
                <Thumbnail small source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
              </Button>         
            </View>
            <View style={cstyles.body} >
              <SearchBar color="#E8E9EA" onChangeText={(text) => this.setState({searchText: text})}  />
            </View>
            <View style={cstyles.right} >
              <Button transparent>
                <View style={cstyles.iconWrapper} >
                  <View style={styles.circle} >
                    <Text style={styles.iconText} >!</Text>
                  </View>
                </View>
              </Button>
            </View>
          </Header>
          <SubNavBar>
            <Picker filled/>        
            <Picker/>
          </SubNavBar>
          <Tabs>
            <Tab heading="Bids">
              <AutoLoadList load={() => console.log("loaded")} >
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
                <Bid/>
              </AutoLoadList>
              <Fab onPress={() => Actions.createbid()}/>
            </Tab>
            <Tab heading="Ethad Molak">
              <ScrollView style={styles.bidsList} bounces>
                <Text>
                  Ethad Molak
                </Text>
              </ScrollView>
            </Tab>
          </Tabs>
          <Footer style={cstyles.footer} >
            <FooterTab style={cstyles.footerTab}>
              <Button vertical>
                <FontAwesome name="newspaper-o" size={30} color="#484848" />
                <Text>Feeds</Text>
              </Button>
              <Button vertical>
                <Icon name="users" size={30} color="#484848" />
                <Text>Profiles</Text>
              </Button>
              <Button vertical>
                <LineIcon name="tag" size={30} color="#484848"  />
                <Text>Market</Text>
              </Button>
              <Button vertical>
                <Icon name="x" size={30} color="#484848" />              
                <Text>Bids</Text>
              </Button>
              <Button vertical>
                <Icon name="x" size={30} color="#484848" />              
                <Text>More</Text>
              </Button>
              </FooterTab>
          </Footer>  
        </View>
      </Drawer>
    )
  }
}




const styles = StyleSheet.create({
  circle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    color: "#FE8080",
    fontWeight: "bold",
    fontSize: 24
  },
  bidsList: {
    marginVertical: 25,
  },
})