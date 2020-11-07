import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import ION from 'react-native-vector-icons/Ionicons'
import { primaryColor } from '../supports/styles'
import Home from '../screens/Home'
import ThankYou from '../screens/ThankYou'
import {connect} from 'react-redux'


const Tab=createBottomTabNavigator()

const MainTab = () => {


    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                return {
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        size=30

                        if (route.name === 'Home') {
                            iconName = 'list-ul';
                            return <FA5 name={iconName} size={size} color={color}/>;
                        } else if (route.name === 'Thank You') {
                            iconName = focused ? 'bulb' : 'bulb-outline';
                            return <ION name={iconName} size={size} color={color}/>;
                        }
    
                        // You can return any component that you like here!
                        // return <MCIcon name={iconName} size={size} color={color}/>;
                    },
                    // tabBarVisible: route.name==='Home'?true:false
                    // tabBarVisible: tabBarVisible
                    
                }
            }}
            tabBarOptions={{
                activeTintColor: primaryColor,
                inactiveTintColor: 'gray',
                style:{padding:5,height:60},
                labelStyle:[{marginBottom:5,fontSize:12},{fontFamily: 'Ubuntu-Medium'}],
            }}
            
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Thank You" component={ThankYou}/>
            {/* <Tab.Screen name="Settings" component={Login} options={{ tabBarLabel: 'Settings!' }}/> */}
        </Tab.Navigator>
    )
}

const MapstatetoProps=(state)=>{
    return {
        Transaction: state.Transaction
    }
}


export default connect(MapstatetoProps) (MainTab);