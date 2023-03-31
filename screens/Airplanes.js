import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Base, Typography } from '../styles'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { selectPlaces } from '../slices/userSlice'



const Airplanes = () => {

    const flights = useSelector(selectPlaces)
    const [arrival, setArrival] = useState([])
    const [depature, setDepature] = useState("")
    const [scheduled, setScheduled] = useState([])

    const navigation = useNavigation()

    useEffect(() => {


        if (!flights) return

        let x = flights.allData

        let newArr = []

        let dep = x[0].departure.airport

        let time = []



        x.forEach((element) => {

            newArr.push(element.arrival.airport)

            //newDep.push(element.departure.airport)

            time.push(element.departure.scheduled)




        })

        setArrival(newArr)

        setDepature(dep)

        setScheduled(time)


    }, [flights]);

    const arriv = arrival.map((y, index) => {

        let arrAirport = y.slice(0, 20);
        return <Text key={index} style={Base.airplaneText}> {arrAirport}</Text>
    })
    /*
        const depa = depature.map((y, index) => {
            return <Text key={index} style={Base.airplaneText}> {y}</Text>
        })*/

    const schedDate = scheduled.map((y, index) => {
        let dates = y.slice(5, 10);



        return <Text key={index} style={Base.airplaneText}>{dates}</Text>
    })

    const schedTime = scheduled.map((y, index) => {


        let hours = y.slice(11, 16)



        return <Text style={Base.airplaneText} key={index} >{hours}</Text>
    })


    return (
        <>
            <View>
                <TouchableOpacity style={Base.btnBackAirport}
                    onPress={() => navigation.navigate('Flights')}
                ><Ionicons name={"arrow-back-outline"} size={25} />
                </TouchableOpacity>
                <Text style={Typography.header3}>Departure Flights</Text>
                <Text style={Typography.header4}>From: {depature}</Text>
            </View>
            <View style={Base.airplaneList}>


                <View ><Text>Arrival</Text></View>



                <View ><Text style={{ marginLeft: 80 }}>Date</Text></View>
                <View ><Text>Time</Text></View>


            </View>


            <ScrollView>
                <View style={Base.airplaneList2}>


                    <View >{arriv}</View>



                    <View >{schedDate}</View>
                    <View >{schedTime}</View>



                </View >
            </ScrollView>
        </>
    )
}

export default Airplanes
