import React,{ Component } from 'react'
import { Text } from 'react-native'
import {titleConstruct} from '../supports/services'

class PrimaryText extends Component {
    state = {  }
    render() { 
        return ( 
            <Text
                style={{
                    fontFamily: 'Ubuntu-Light',
                    color: 'rgba(0,0,0,.9)',
                    ...this.props.style
                }}
            >
                {titleConstruct(this.props.children)}
            </Text>
         );
    }
}

 
export default PrimaryText;