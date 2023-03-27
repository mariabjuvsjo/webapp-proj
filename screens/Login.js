import { StyleSheet, Text, View, Image, TextInput, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Base, Typography } from '../styles'
import { useNavigation } from '@react-navigation/native'
import authModel from '../models/authModel'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'

const Login = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    async function doLogin() {

        const loginRes = await authModel.login(email, password)

        try {

            if (loginRes.data.token) {
                dispatch(setUser({
                    token: loginRes.data.token,
                    user: loginRes.data.user

                }))

                navigation.navigate('Landing')
            }




        } catch (err) {
            alert("no username or password")
        }



    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#276ef1' }}>
            <StatusBar style="light" />

            <View style={Base.inputContainer} >
                <Text style={Typography.title}>Lifta</Text>
                <TextInput
                    placeholder='Email'
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={Base.inputWhite}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={Base.inputWhite}


                />
                <TouchableOpacity
                    style={Base.loginBtn}
                    onPress={() => {
                        doLogin()
                    }}
                >
                    <Text style={Base.btnText}>Login</Text>

                </TouchableOpacity>
                <Text>Or... Not a User?</Text>
                <TouchableOpacity
                    style={Base.regBtn}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={Base.regText} type="outline" >Register</Text>

                </TouchableOpacity>



            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})