import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'

const Account = () => {

    const userInfo = useSelector(selectUser)
    return (
        <View>
            <Text>{userInfo.user.email}</Text>
        </View>
    )
}

export default Account