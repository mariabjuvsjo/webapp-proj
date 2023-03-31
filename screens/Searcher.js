import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Typography, Base } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import * as Location from 'expo-location'


import { setDestination, setOrigin } from '../slices/navSlice';
import TopNav from '../components/TopNav';
import TopSearch from '../components/TopSearch';
import SavedPlaces from '../components/SavedPlaces.jsx';
import FrontItems from '../components/FrontItems';




const Searcher = () => {


    return (

        <SafeAreaView style={Base.container}>
            <ScrollView >
                <TopNav />
                <TopSearch />
                <SavedPlaces />
                <FrontItems />
            </ScrollView>
        </SafeAreaView>

    )
}



export default Searcher