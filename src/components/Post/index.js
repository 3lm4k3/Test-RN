import React from "react"
import {
  View,
} from "react-native"
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text,
  Button,
  Left, 
  Body, 
  Right
} from 'native-base';
import { Actions } from "react-native-router-flux"
import ReadMore from "react-native-read-more-text"
import Icon from "react-native-vector-icons/Feather"
import IonIcon from "react-native-vector-icons/Ionicons"
import EstyleSheet from "react-native-extended-stylesheet"


import Divider from "../common/Divider"
import Album from "../common/Album"
import Image from "../common/Image"

import cstyles from "../common/style"



export default class Post extends React.Component {
  state = {
    liked: false,
    likes: 23,
    loaded: false,
    bookmarked: false,
  }
  toggleBookmark = () => {
    this.setState(((prevState, props) => {
      return { bookmarked: !prevState.bookmarked};
    }))
  }
  toggleLike = () => {
    const { liked } = this.state
    if(liked) {
      this.setState(state => ({
        liked: false,
        likes: state.likes - 1
      }))
    }else {
      this.setState(state => ({
        liked: true,
        likes: state.likes + 1
      }))
    }
    
  }
  toggleComment = () => {
    console.log("comment");
    
  }
  handleShare = ( ) => {

  }
  handleImageClick = () => {
    Actions.imageLightBox()
  }
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: "#484848", marginTop: 5}} onPress={() => {}}>
        Read more
      </Text>
    );
  }

  render() {
    const { row, headerText, black, bold } = cstyles
    const { selling, sponsored, album } = this.props
    const { loaded, bookmarked, likes, liked } = this.state
    return (
      <View style={styles.container} >
        <View style={ [styles.card ]} >
          <CardItem style={styles.cardItem}>
            <View style={styles.cardActions} >
              <Button transparent onPress={this.toggleBookmark} >
                <IonIcon name={bookmarked ? "ios-bookmark" : "ios-bookmark-outline"} size={45} color="#484848" style={{marginHorizontal: 5}} /> 
                
              </Button>
              <Button transparent>
                <Icon name="more-horizontal" size={25} color="#484848" style={{marginHorizontal: 5}} />
              </Button>
            </View>
            <Left>
              <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />
              <Body>
                <Text>NativeBase</Text>
                <View>
                  {
                    !sponsored  && <Text note>GeekyAnts</Text>
                  }
                  <Text note style={{color: "#935CAE"}} >Dec 12 at 5:30 PM</Text>
                </View>
                {
                  sponsored && <Text style={{color: "#FE8080"}}>Sponsored</Text>
                }
              </Body>
            </Left>
          </CardItem>
          <CardItem style={styles.cardItem}>
          <View>
            {
              selling && 
              <View>
                <Text style={[headerText, black, {lineHeight: 30}]} >Ipsum commodo ex Lorem esse consectetur.</Text>
                <Text style={[styles.price, bold]}>30,000 EGP</Text>
              </View>
            }
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}>
              <Text style ={{color : "#95989A"}}>
                Elit culpa reprehenderit ad ullamco voluptate anim ipsum nostrud eiusmod ullamco.
                Elit culpa reprehenderit ad ullamco voluptate anim ipsum nostrud eiusmod ullamco.
              </Text>
            </ReadMore>
          </View>
          
          </CardItem>
          <CardItem cardBody style={styles.cardBody} >
            {
              album ? <Album/> :
                <View style={{flex: 1}}>
                  <Image onPress={this.handleImageClick} source={{uri: (!loaded ? "https://picsum.photos/200/300/?blur" : 'https://picsum.photos/200/300/?random') }} style={{height: 350, width: null, flex: 1}}/>
              </View>
            }
          </CardItem>
          <Divider color="#95989A" />
          <View style={[row, { paddingHorizontal: 10, paddingBottom: 10}]}>
            <Left>
              <Button transparent onPress={this.toggleLike} active={liked} >
                <Icon name="thumbs-up" size={25} color={liked ? "#935CAE" : "#484848"}/>
                <Text style={{marginLeft: -10, marginTop: 5, fontSize: 10, color: liked ? "#935CAE" : "#484848"}}>{likes} Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent onPress={this.toggleComment} >
                <Icon name="message-square" size={25} color="#484848"/>
                <Text style={{marginLeft: -10, color: "#484848", fontSize: 10}}>4 Comments</Text>
              </Button>
            </Body>
            <Right >
            <Button transparent onPress={this.handleShare} >
                <IonIcon name="ios-share-alt-outline" size={25} color="#484848"/>
                <Text style={{marginLeft: -10, color: "#484848", fontSize: 10}}>Share</Text>
              </Button>
            </Right>
          </View>
          
        </View>
        
      </View>
    )
  }
}

const styles = EstyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    marginVertical: 5,
  },
  card: {
  },
  cardItem: {
    backgroundColor: "#F8F8F8",

  },
  cardActions: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    zIndex: 2
  },
  cardBody: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  price: {
    color: "#FE8080"
  },
  '@media (min-width: 750) and (max-width: 1000)': { // media queries
    container: {
      marginHorizontal: 100
    }
  }
  })
