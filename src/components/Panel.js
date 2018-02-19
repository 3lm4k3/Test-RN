import React, {Component}from 'react';

import {StyleSheet,Text,View,Image,TouchableOpacity,TouchableHighlight,Animated} from 'react-native'; //Step 1
import LinearGradient from 'react-native-linear-gradient';

class Panel extends Component{
    constructor(props){
        super(props);
        

        this.icons = {     //Step 2
            'up'    : require('../assets/images/home.png'),
            'down'  : require('../assets/images/prices.png')
        };

        this.state = {       //Step 3
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value()
        };
    }

    toggle(){
          //Step 1
    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();  //Step 5
    }
    _setMaxHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height
    });
}

_setMinHeight(event){
    this.setState({
        minHeight   : event.nativeEvent.layout.height
    });
}


    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return (
        <Animated.View 
            style={[styles.container,{height: this.state.animation}]}> 
            <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >

            <View>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        >
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </View>
            </LinearGradient>
            </Animated.View>
        );
    }
}
var styles = StyleSheet.create({
    container   : {
        
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        color: "#FCFE80",
        flex    : 1,
        padding : 10,
        fontSize:22,
        backgroundColor: 'transparent',
        fontWeight:'bold'
    },
    button      : {


    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 0,
        paddingTop  : 0,
        backgroundColor:'transparent',
    }
});
export default Panel;