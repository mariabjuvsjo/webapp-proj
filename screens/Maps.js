import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Map from '../components/Map'

import Cars from '../components/Cars'
import { Base } from '../styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'
import { selectUser } from '../slices/userSlice'
import placeModel from '../models/placeModel'

const Maps = () => {

    const navigation = useNavigation()

    const destination = useSelector(selectDestination);

    const user = useSelector(selectUser)

    useEffect(() => {

        const addArtes = async () => {
            const result = await placeModel.createPlaces(user.token, destination)

            console.log(result)




        };


        addArtes()



    }, [])



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