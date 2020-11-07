import React, { Component } from 'react'
import {View,Image} from 'react-native'

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <View
                style={{
                    width: 100,
                    height: 85,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    // borderColor: 'red',
                    // borderWidth: 2,
                    ...this.props.style
                }}
            >
                <View
                    style={{
                        width: 200,
                        height: 270,
                        paddingTop: 42,
                        paddingLeft: 5,
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            // width: 200,
                            // height: 100
                            // resizeMode: 'cover'
                        }}
                        source={{uri:'https://i.pinimg.com/originals/8e/a9/15/8ea915c2950a58cad7e184b94d6d4bac.jpg'}}
                    />
                </View>
            </View>
         );
    }
}
 
export default Logo;