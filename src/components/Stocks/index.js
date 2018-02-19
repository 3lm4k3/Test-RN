import React from "react"
import {
  View, 
  Text,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native"
import {
  Button, 
  Thumbnail
} from "native-base"
import { Actions } from "react-native-router-flux"
import { AreaChart } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import Icon from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LinearGradientView from "react-native-linear-gradient"
import Carousel from 'react-native-snap-carousel';

import Header from "../Header/index"
import SearchBar from "../common/HeaderSearchBar"
import DropdownSubNavBar from "../common/SubNavBar"
import Picker from "../common/Picker"

import styles from "./styles"
import cstyles from "../common/style"

export default class Stocks extends React.Component {
  state = {
    data: [ 4,3,5,6,5, 8 ],
    entries: [
      {
        title: "Steel",
        up: false
      },
      {
        title: "Cement",
        up: true
      },
      {
        // empty object for the last component
      }
    ]
  }
  _renderItem = ({item, index}) => {
    const { data } = this.state
    if(index === 2) {
      return (
        <View style={styles.card} >
          <LinearGradientView colors={["#5871B5", "#935CAE"]} style={{flex:1}} >
            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
              <Icon name="layers" size={50} color="#fff" />
              <Text style={{color: "#fff", fontSize: 18}}>Material</Text>
              <Text style={{color:"#fff", fontSize: 10}}>Today Avarage, 26 Dec.</Text>
            </View>
          </LinearGradientView>
        </View>
      )
    }
    return (
      <View style={styles.card} >
        <View style={styles.meta}>
          <MaterialCommunityIcons name="hexagon" size={30} color="#5871B5" />
          <Text style={{color: "#5871B5", fontSize: 18}} >{item.title}</Text>
          <Text style={{color:"#484848", fontSize: 10}} >Today Avarage, 26 Dec.</Text>
        </View>
        <View style={styles.stockData} >
            <View style={{flexDirection: "row"}} >
              {
                item.up ? <FontAwesome name="caret-up" size={30} color="#76DB6E" /> :
                  <FontAwesome name="caret-down" size={30} color="#FE8080" />
              }
              <Text style={styles.stockPrice} >EGP 1,500</Text>
            </View>
            <Text style={[styles.stockPercentage, item.up && {color: "#76DB6E"}]} >-0.11%</Text>
        </View>
        <View style={styles.gradient} >
          <LinearGradientView colors={["rgba(88,113,181,0.2)", "#FFFFFF"]} 
            start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={{flex: 1}} />
        </View> 
        <AreaChart
            style={ { height: 100, marginBottom: 35 } }
            dataPoints={ data }
            showGrid={false}
            svg={ {
                fill: 'rgba(88,113,181,0.2)',
                stroke: '#5871B5',
                strokeWidth: "3"
            } }
            contentInset={ { top: 50, bottom: 25 } }
            renderDecorator={ ({ x, y, index, value }) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 5 }
                    stroke={ '#5871B5' }
                    fill={ 'white' }
                    strokeWidth={3}
                    shadowSvg={{
                        stroke: 'rgba(134, 65, 244, 0.2)',
                        strokeWidth: 5,
                    }}
                />
            ) }
        />
      </View>
    );
  }
  render() {
    const { data, entries } = this.state
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-left" size={30} />
            </Button>         
          </View>
          <View style={cstyles.body} >
            <SearchBar color="#E8E9EA" onChangeText={(text) => this.setState({searchText: text})}  />
          </View>
          <View style={cstyles.right} >
            <Button transparent>
              <View style={cstyles.iconWrapper} >
                <View style={cstyles.iconNotification} />
                <Icon name="bell" size={30}  />
              </View>
            </Button>
          </View>
        </Header>
        {/* <DropdownSubNavBar>  */}
          {/* <Picker/> */}
        {/* </DropdownSubNavBar> */}
        <View style={styles.content} >
          <Text style={styles.subTitle} >Overview</Text>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={175}
            containerCustomStyle={{marginVertical: 25}}
            activeSlideAlignment="start"
            contentContainerCustomStyle={{marginLeft: 25}}
            inactiveSlideScale={0.8}
            
          />
          <View style={styles.brandsList} >
            <Text style={styles.subTitle} >Brands</Text>
            <View style={{
              width: Dimensions.get("window").width,
              alignItems: "flex-end",
              paddingHorizontal: 25
            }} >
              <TouchableWithoutFeedback>
                <Text style={{color: "#5871B5", fontSize: 17}} >See more</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
