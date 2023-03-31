import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import flightModel from '../models/flightModel'
import { useDispatch } from 'react-redux'
import { setPlaces } from '../slices/userSlice'
import { useNavigation } from '@react-navigation/native'
import { Typography, Base } from '../styles'
import { Ionicons } from '@expo/vector-icons';



const airportData = [
    {
        "title": "Stockholm-Arlanda flygplats",
        "iata": "ARN"
    },
    {
        "title": "Göteborg-Landvetter flygplats",
        "iata": "GOT"
    },
    {
        "title": "Stockholm-Bromma flygplats",
        "iata": "BMA"
    },
    {
        "title": "Malmö Airport (Sturup)",
        "iata": "MMX"
    },
    {
        "title": "Luleå-Kallax flygplats",
        "iata": "LLA"
    },
    {
        "title": "Umeå Airport",
        "iata": "UME"
    },
    {
        "title": "Åre Östersunds flygplats",
        "iata": "OSD"
    },
    {
        "title": "Visby flygplats",
        "iata": "VBY"
    },
    {
        "title": "Kiruna flygplats",
        "iata": "KRN"
    },
    {
        "title": "Ronneby Airport",
        "iata": "RNB"
    },
    {
        "title": "Arvidsjaurs flygplats",
        "iata": "AJR"
    },
    {
        "title": "Borlänge, Dala Airport",
        "iata": "BLE"
    },
    {
        "title": "Gällivare Lapland Airport",
        "iata": "GEV"
    },
    {
        "title": "Hagfors flygplats",
        "iata": "HFS"
    },
    {
        "title": "Halmstads flygplats",
        "iata": "HAD"
    },
    {
        "title": "Hemavan Tärnaby Airport",
        "iata": "HMV"
    },
    {
        "title": "Jönköpings flygplats",
        "iata": "JKG"
    },
    {
        "title": "Kalmar flygplats",
        "iata": "KLR"
    },
    {
        "title": "Karlstads flygplats",
        "iata": "KSD"
    },
    {
        "title": "Kramfors-Sollefteå Höga Kusten Airport",
        "iata": "KRF"
    },
    {
        "title": "Kristianstad Österlen Airport",
        "iata": "KID"
    },
    {
        "title": "Linköping-Saabs flygplats",
        "iata": "LPI"
    },
    {
        "title": "Lycksele flygplats",
        "iata": "LYC"
    },
    {
        "title": "Norrköping-Kungsängens flygplats",
        "iata": "NRK"
    },
    {
        "title": "Pajala Airport",
        "iata": "PJA"
    },
    {
        "title": "Skellefteå flygplats",
        "iata": "SFT"
    },
    {
        "title": "Stockholm-Skavsta flygplats (Nyköping)",
        "iata": "NYO"
    },
    {
        "title": "Stockholm-Västerås flygplats",
        "iata": "VST"
    },
    {
        "title": "Sundsvall-Timrå flygplats (Midlanda)",
        "iata": "SDL"
    },
    {
        "title": "Sveg Härjedalens flygplats",
        "iata": "EVG"
    },
    {
        "title": "Sälen-Scandinavian Mountains flygplats",
        "iata": "SCR"
    },
    {
        "title": "Torsby flygplats (Fryklanda)",
        "iata": "TYF"
    },
    {
        "title": "Trollhättan-Vänersborgs flygplats",
        "iata": "THN"
    },
    {
        "title": "Vilhelmina flygplats",
        "iata": "VHM"
    },
    {
        "title": "Växjö-Kronobergs flygplats",
        "iata": "VXO"
    },
    {
        "title": "Ängelholm-Helsingborg flygplats",
        "iata": "AGH"
    },
    {
        "title": "Örebro flygplats",
        "iata": "ORB"
    },
    {
        "title": "Örnsköldsvik Airport",
        "iata": "OER"
    },

]

const Flights = () => {

    //const [flights, setFlights] = useState([])
    //const [airport, setAirport] = useState()

    const dispatch = useDispatch()

    const navigation = useNavigation()

    let iataCode = ""



    async function getFlights() {

        let res = await flightModel.getflights(iataCode)

        let flightData = res.data

        console.log(flightData)


        if (flightData) {
            dispatch(
                setPlaces(
                    {
                        allData: flightData
                    }
                )
            )
        }

        navigation.navigate('Airplanes')
    }


    return (
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
            <TouchableOpacity style={Base.btnBackAirport}
                onPress={() => navigation.navigate('Searcher')}
            ><Ionicons name={"arrow-back-outline"} size={25} />
            </TouchableOpacity>



            <Text style={Typography.header3}>Choose Airport</Text>
            <FlatList
                style={{ padding: 10, width: 300, backgroundColor: '#e6e6e6', }}
                data={airportData}
                keyExtractor={(item) => item.iata}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        iataCode = item.iata
                        getFlights()
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 400, padding: 10, }}>{item.title}</Text>
                    </TouchableOpacity >
                )

                }
            />

        </View>
    )
}

export default Flights