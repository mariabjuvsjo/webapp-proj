import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Base } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { GOOGLE_MAPS_APIKEY } from '@env';
import * as Location from 'expo-location'


import { setDestination, setOrigin } from '../slices/navSlice';





const TopSearch = () => {
    const [location, setLocation] = useState()

    const dispatch = useDispatch()

    Location.setGoogleApiKey(GOOGLE_MAPS_APIKEY)

    useEffect(() => {
        const getPermissions = async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({ useGoogleMaps: true })


            console.log(currentLocation)

            let transformToGoogleCoords = {
                lat: currentLocation.coords.latitude,
                lng: currentLocation.coords.longitude

            }

            console.log('hej')

            console.log(transformToGoogleCoords)




            dispatch(
                setOrigin({
                    location: transformToGoogleCoords,
                    description: ""
                }))


        }
        getPermissions();



    }, []);



    const navigation = useNavigation()


    return (


        <View style={Base.searcher}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Ride')}
                style={{ width: 50, height: 50, backgroundColor: '#e6e6e6', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='ios-search' size={32} color='#101010' />
            </TouchableOpacity>
            <View>
                <TextInput style={Base.searchbar} placeholder='Where to?' onTouchStart={() => navigation.navigate('Ride')} />




            </View>

        </View>


    )
}



export default TopSearch