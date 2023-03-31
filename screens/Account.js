import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Account = () => {

    const userInfo = useSelector(selectUser)


    return (

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 30 }}>
            <Text style={{ fontSize: 40, fontWeight: 600, padding: 10 }}>{userInfo.user.email}</Text>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
                <MaterialCommunityIcons name='account' size={50} color='#101010' />
            </View>


        </View>

    )
}

export default Account