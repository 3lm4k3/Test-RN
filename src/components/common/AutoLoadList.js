import React from "react"
import {
  ScrollView,
  View,
  StyleSheet
} from "react-native"


export default class AutoLoadList extends React.Component {
  state = {
    reachedIndicator: false
  }
  loadMorePosts = () => {    
    this.props.load()
    // After Loading if async
    // this.setState({reachedIndicator: false})

  }
  handleScroll = (event) => {
    const pageYOffset = (event.nativeEvent.contentOffset.y)
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height

    this.scrollIndicator.measure((fx, fy, width, height, px, py) => { 
      // console.log(py - scrollViewHeight - height)
      // console.log(fy);
             
        if((py - scrollViewHeight - height - 50 /* marginBottom */) <= 0 && !this.state.reachedIndicator) {
          console.log(true);
          this.setState({reachedIndicator: true})
          this.loadMorePosts()
        }

    })
  }
  render() {
    return (
      <ScrollView onScroll={this.handleScroll} style={styles.container} bounces showsVerticalScrollIndicator={false}>
        <View style={styles.list} >
          { this.props.children }
        </View>
      <View style={styles.scrollIndicator} ref={ref => this.scrollIndicator = ref} />          
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  },
  scrollIndicator: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginBottom: 50,
    alignSelf: "center"
  }
})