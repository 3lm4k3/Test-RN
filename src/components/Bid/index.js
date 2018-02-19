import React from "react"
import {
  View,
  StyleSheet,
  Text
} from "react-native"
import Icon from "react-native-vector-icons/Feather"
import Ripple from "react-native-material-ripple"
import { Actions } from "react-native-router-flux"
import ReadMore from "react-native-read-more-text"

import Divider from "../common/Divider";

import cstyles from "../common/style"

export default class Bid extends React.Component {
  state = {

  }
  handleBidClick = () => {
    Actions.bid()
  }
  _renderTruncatedFooter = (handlePress) => {
    return this.props.seemore && (
      <Text style={{color: "#484848", marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return  this.props.seemore && (
      <Text style={{color: "#484848", marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={[cstyles.h3, styles.bidTitle]} onPress={this.handleBidClick} >Bid Title Goes here</Text>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
          onReady={this._handleTextReady}>
          <Text numberOfLines={3} style={styles.bidText} >
            Dolor aliqua non labore do nostrud reprehenderit adipisicing magna enim officia culpa Lorem.
            Dolor aliqua non labore do nostrud reprehenderit adipisicing magna enim officia culpa Lorem.
            Dolor aliqua non labore do nostrud reprehenderit adipisicing magna enim officia culpa Lorem.
          </Text>
        </ReadMore>
        <Divider/>
        <Text style={[cstyles.underlined, styles.address]} >
          Address goes here, Cairo, Egypt.
        </Text>
        <View style={styles.actions} >
          <Ripple style={styles.action} rippleColor="#935CAE">
            <Icon name="clock" size={30} color="#935CAE" />
            <Text style={styles.actionText} >3 weeks</Text>
          </Ripple>
          <Ripple style={styles.action} rippleColor="#935CAE">
            <Icon name="activity" size={30} color="#5871B5" />
            <Text style={styles.actionText} >Bid Status</Text>
          </Ripple>
          <Ripple style={styles.action} rippleColor="#935CAE">
            <Icon name="clock" size={30} color="#B334C4" />
            <Text style={styles.actionText} >200 Bids</Text>
          </Ripple>
        </View>
      </View>
    )
  }
}


export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  bidTitle: {
    color: "#935CAE",
    fontSize: 20
  },
  actions: {
    flexDirection: "row",
  },
  bidText: {
    fontSize: 18,
    marginVertical: 5,
  },
  action: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16
  },
  address: {
    fontSize: 16,
    marginVertical: 5
  }
})