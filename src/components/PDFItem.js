import React,{ Component } from 'react';
import {  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,TouchableOpacity,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions,Router,Stack,Scene,PARAMS } from 'react-native-router-flux';
import StarRating from './common/StarRating';
import { Button,Card,Header,CategoryCard,CardSection,ContactCard,Input,Spinner,
  Checkbox } from './common';
import LinearGradient from 'react-native-linear-gradient';

import * as actions from '../actions';
class PDFItem extends Component{
	componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    //const { tag, expanded } = this.props;
    
    
  }

	render() {
    const { pdfTitleText } = styles;
    const { id, title,ratings,subTitle,reviews,address,pdfTitle,pdfLink } = this.props.tag;

    return (
      <TouchableOpacity

        onPress={() => this.props.selectTag(id),() => Actions.pdfPage({pdfLink:pdfLink})}
      >
        <LinearGradient colors={['#5871B5', '#935CAE']}
                           style={{width:162,height:218,alignItems:'center',
                              justifyContent:'center',marginTop:19}}>
                          <Text style={pdfTitleText}>{pdfTitle}</Text>
                        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const styles = {
  
  pdfTitleText:{
    backgroundColor:'transparent',
    color:'white',
    fontWeight:'bold',
    fontSize:25,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTagId === ownProps.tag.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(PDFItem);