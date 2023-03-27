import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Base, Typography } from '../styles';
import authModel from '../models/authModel';

const Register = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function doReg() {

        if (email && password) {
            const result = await authModel.register(email, password);

            navigation.navigate("Login");
        } else {
            showMessage({
                message: "Something went wrong",
                description: "Either email or password is missing",
                type: "warning"
            })

        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#276ef1' }}>

            <Text style={Typography.header3}>Register</Text>
            <View style={Base.inputContainer} >
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
                        doReg();
                    }}
                >
                    <Text style={Base.btnText} type="outline" >Register</Text>

                </TouchableOpacity>



            </View>



        </View>
    )
}

export default Register

const styles = StyleSheet.create({})