import { SafeAreaView, Text, StyleSheet, Image, View, TouchableOpacity, PermissionsAndroid, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Typography, Base } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import * as Location from 'expo-location'


import { setDestination, setOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'


const From = () => {

    const origin = useSelector(selectOrigin)

    const dispatch = useDispatch()

    let myAdress;

    const [location, setLocation] = useState()
    const [adress, setAdress] = useState('')

    Location.setGoogleApiKey(GOOGLE_MAPS_APIKEY)

    useEffect(() => {
        console.log(origin)
        const hej = async () => {
            const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
                longitude: origin.location.lng,
                latitude: origin.location.lat
            }, {
                useGoogleMaps: true
            });

            myAdress = reverseGeocodedAddress[0].name
            setAdress(myAdress);

            console.log(myAdress)

            dispatch(
                setOrigin({
                    location: origin.location,
                    description: myAdress
                }))



        };


        hej()



    }, []);




    return (
        <View>

            <TextInput style={Base.searchbar2} defaultValue={adress} />
        </View>
    )
}

export default From

const styles = StyleSheet.create({})