import { SafeAreaView, Text, StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Services from './Services';


import Account from './Account';
import Activity from './Activity';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Landing = () => {

    const Tab = createBottomTabNavigator()

    return (
        <SafeAreaView

            style={{ flex: 1 }}>

            <Tab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        const routeIcons = {
                            "Home": "home",
                            "Services": "apps",
                            "Activity": "bookmark-minus",
                            'Account': 'account',
                        };

                        let inx = route.name
                        let iconName = routeIcons[inx] || "alert";

                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />

                    }, tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false

                })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Services" component={Services} />
                <Tab.Screen name="Activity" component={Activity} />
                <Tab.Screen name="Account" component={Account} />

            </Tab.Navigator>



        </SafeAreaView>

    )
}



export default Landing