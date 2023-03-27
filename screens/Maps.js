import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'

import Cars from '../components/Cars'
import { Base } from '../styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Maps = () => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >


            <View style={{ flex: 1 }}>
                <TouchableOpacity style={Base.btnBack}
                    onPress={() => navigation.navigate('Searcher')}
                >

                    <Ionicons name={"arrow-back-outline"} size={25} />
                </TouchableOpacity>
                <Map />
            </View>
            <Cars />


        </SafeAreaView>
    )
}

export default Maps