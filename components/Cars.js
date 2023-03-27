import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Base, Typography } from '../styles'
import { useSelector } from 'react-redux';
import { selecTravelInfo } from '../slices/navSlice';

const listItem = [
    {
        id: "123",
        title: "LiftaX",
        rate: 1,
        image: require("../assets/img/old.png"),

    },
    {
        id: "456",
        title: "LiftaXL",
        rate: 1.2,
        image: require("../assets/img/suv.png"),

    },
    {
        id: "789",
        title: "LiftaLUX",
        rate: 1.5,
        image: require("../assets/img/comfort.png"),

    },




];

const RATE = 1.5;

const Cars = () => {
    const [marked, setMarked] = useState(null);

    const travelInformation = useSelector(selecTravelInfo)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Text style={Typography.header4}>Choose Your Ride - {travelInformation?.distance?.text}</Text>
            </View>

            <FlatList
                data={listItem}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setMarked(item)} style={[styles.cars, item.id === marked?.id && styles.selected]} >


                        <Image
                            style={{ height: 50, width: 50, resizeMode: 'contain', margin: 10 }}
                            source={item.image}
                        />
                        <View style={{ marginLeft: -50, }}>
                            <Text style={{ fontSize: 18, }}>{item.title}</Text>
                            <Text>{travelInformation?.duration?.text}</Text>
                        </View>

                        <Text style={{ fontSize: 18 }}>SEK

                            {new Intl.NumberFormat('sv-se', {

                                currency: 'SEK'

                            }).format(Math.floor(
                                (travelInformation?.duration?.value * RATE * item.rate))
                            )
                            }
                        </Text>
                    </TouchableOpacity >
                )

                }



            />
            < View >
                <TouchableOpacity disabled
                    ={!marked} style={styles.button}>
                    <Text style={styles.btnText}>Confirm {marked?.title}</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView >
    )
}

export default Cars

const styles = StyleSheet.create({
    cars: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5


    },
    selected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'lightgrey'
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        margin: 30

    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 500

    }

});