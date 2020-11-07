import React, { Component } from 'react'
import {View} from 'react-native'
import PrimaryText from '../components/PrimaryText'

class ThankYou extends Component {
    state = {  }
    render() { 
        return ( 
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <PrimaryText
                    style={{
                        fontSize: 24,
                        padding: 50,
                        textAlign: 'center',
                        letterSpacing: 5,
                        lineHeight: 30
                        
                    }}
                >
                    Thank You for Considering Me
                </PrimaryText>
            </View>
         );
    }
}
 
export default ThankYou;