import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTab from './MainTab'
import SubBreed from '../screens/SubBreed'


const Stack=createStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='MainTab' component={MainTab} options={{headerShown:false}}/>
            <Stack.Screen 
                name='Sub Breed'
                component={SubBreed} 
                options={({route})=>({
                    headerTitle:route.params.subBreed
                })}
            />
        </Stack.Navigator>
    )
}

export default HomeStack