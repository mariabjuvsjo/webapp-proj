import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import SavedPlaces from '../components/SavedPlaces'
import React, { useEffect, useState } from 'react'
import placeModel from '../models/placeModel';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';

import { Ionicons } from '@expo/vector-icons';

const Activity = () => {

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





    return (
        <View>
            <Text style={styles.title}>Activity</Text>

            <Text style={{ fontSize: 20, fontWeight: 600, padding: 10 }}>Upcoming</Text>

            <View style={styles.upcomeBox}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>You have no upcoming Trips</Text>

                <Image

                    style={styles.img}
                    source={require("../assets/img/calender.png")}

                />
            </View>

            <Text style={{ fontSize: 20, fontWeight: 600, padding: 10 }}>Search History</Text>

            <ScrollView nestedScrollEnabled={true}>
                {listing}
            </ScrollView>


        </View>
    )
}

export default Activity

const styles = StyleSheet.create({

    title: {
        fontSize: 40,
        fontWeight: 600,
        padding: 10

    },

    upcomeBox: {
        borderColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
        margin: 10
    },
    img: {
        width: 100,
        height: 100
    }

})