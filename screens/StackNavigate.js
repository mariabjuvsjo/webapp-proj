import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';


const StackNavigate = () => {


    const Stack = createNativeStackNavigator();

    const userInfo = useSelector(selectUser)

    return (


        <Stack.Navigator>

            {!userInfo ? (
                <>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={
                            {
                                headerShown: false
                            }
                        } />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={
                            {
                                headerShown: false
                            }
                        } />
                </>



            ) : (
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                    options={
                        {
                            headerShown: false
                        }
                    } />

            )}

        </Stack.Navigator>
    )
}


export default StackNavigate