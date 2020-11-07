import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { LoadAllTypes, BeginLoadCanines } from './src/redux/actions'
import Cover from './src/screens/Cover' 
import Home from './src/screens/Home'
import HomeStack from './src/navigation/HomeStack'
import MainTab from './src/navigation/MainTab'

class AppInit extends Component {
    state = { 
        cover: true
     }

    componentDidMount=()=>{
        this.props.BeginLoadCanines()

        setTimeout(()=>{
            this.setState({cover: false})
        },1800)
    }

    render() { 
        return ( 
            <View
                style={{
                    flex:1,
                    backgroundColor: 'rgba(150,150,150,.1)'
                }}
            >
                {
                    this.state.cover?
                    <Cover/>
                    :
                    <HomeStack/>
                    // <MainTab/>
                    // <Home/>
                }
            </View>
         );
    }
}
 
export default connect(null,{LoadAllTypes,BeginLoadCanines}) (AppInit);