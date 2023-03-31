
import { SafeAreaView, Text, StyleSheet, Image, View, } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Typography, Base } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import * as Location from 'expo-location'
import { setDestination } from '../slices/navSlice';
import { selectPlaces } from '../slices/userSlice';
import placeModel from '../models/placeModel';


const To = () => {

    const dispatch = useDispatch();


    const navigation = useNavigation();
    return (
        <View>
            <GooglePlacesAutocomplete
                nearbyPlacesAPI='GooglePlacesSearch'
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}
                listEmptyComponent={() => (
                    <View style={{ flex: 1 }}>
                        <Text>No results were found</Text>
                    </View>
                )}

                onPress={(data, details = null
                ) => {


                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                    navigation.navigate('Maps')
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}

                debounce={400}
                placeholder="Where to?"
                styles={toStyle}

            />
        </View>
    )
}

export default To

const toStyle = StyleSheet.create(
    {
        container: {
            flex: 0,

        },
        textInputContainer: {
            width: 300,
            marginTop: 20
        },
        textInput: {
            backgroundColor: '#f6f6f6',
            alignContent: 'center',
            borderRadius: 0,
            padding: 20,
            fontSize: 16,

        }

    }
)