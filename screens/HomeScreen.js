import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Searcher from './Searcher'
import Ride from './Ride'
import Maps from './Maps'

const HomeScreen = () => {

    const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator>

            <Stack.Screen
                name="Searcher"
                component={Searcher}
                options={
                    {
                        headerShown: false
                    }
                } />

            <Stack.Screen
                name='Ride'
                component={Ride}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name='Maps'
                component={Maps}
                options={
                    {
                        headerShown: false
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default HomeScreen