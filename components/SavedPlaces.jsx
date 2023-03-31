import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import placeModel from '../models/placeModel';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';

import { Ionicons } from '@expo/vector-icons';



const SavedPlaces = () => {
    let user = useSelector(selectUser);

    const [lastSearch, setLastSearch] = useState([])
    const [places, setPlaces] = useState([])

    let myToken = user.token



    async function getArtefacts() {
        let place = await placeModel.getArteFactAsObject(myToken)

        setPlaces(place)

        let description = [];

        place.forEach((obj) => {
            description.push(obj.description)
        })






        setLastSearch(description)





    }


    useEffect(() => {

        getArtefacts()

    }, [lastSearch]);

    const reversed = lastSearch.reverse();

    const listing = reversed.map((place, index) => {
        return <Text style={{ fontSize: 20, padding: 10, borderBottomColor: 'grey' }} key={index}>   <Ionicons name={"location"} size={25} />{place}</Text>
    })






    return (<View>
        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 500, textAlign: "center" }}>Last Search</Text>
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            {listing}
        </ScrollView>
    </View>

    )
}

export default SavedPlaces

const styles = StyleSheet.create({

    container: {

        height: 150,
        marginTop: 10
    }



})