import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Animated
} from 'react-native';
import Logo from '../components/Logo'


class Cover extends Component {
    state = { 
        timer: 0,
        opacity: new Animated.Value(1),
     }

     componentDidMount=()=>{
         this.fadeOut()
     }

    
    fadeOut = () => {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0,
                duration: 700,
                delay: 400,
                useNativeDriver: true
            }
        ).start();
    }
    

    render() { 
        return ( 
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    opacity: this.state.opacity
                }}
            >
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center'
                        // flex: 1
                    }}
                >
                    <Logo 
                        style={{
                            transform: [{scale: 1.3}],
                            marginBottom: 10
                        }}
                    />
                </View>
                

                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text
                    style={{
                        fontSize: 40,
                        fontFamily: 'Ubuntu-Medium',
                        color: 'rgba(0,0,0,.9)'
                    }}
                    >
                    Canines
                    </Text>

                </View>
            </Animated.View>
         );
    }
}
 
export default Cover;