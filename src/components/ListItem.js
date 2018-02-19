import React,{ Component } from 'react';
import {
  Text,
  View,
  LayoutAnimation,TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, PARAMS } from 'react-native-router-flux';
import { ContactCard } from './common';

import * as actions from '../actions';
class ListItem extends Component{
	componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    //const { tag, expanded } = this.props;
    
    
  }

	render() {
    const { titleStyle } = styles;
    const { id, title,ratings,subTitle,reviews,address } = this.props.tag;

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.selectTag(id)
          Actions.VisitedProfileProjects(PARAMS)
        }}
      >
        <View>
          <ContactCard title={title} 
          ratingStars={ratings}
          subTitle={subTitle}
          reviews={reviews}
          address={address}
          icon={require('../assets/images/purpleBackground.png')}>
             
            <Text style={titleStyle}>
              {title}
            </Text>
           
          </ContactCard>
          
          
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTagId === ownProps.tag.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);