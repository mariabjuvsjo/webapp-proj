import { FlatList, Text, Image, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import React from 'react'
import { Typography, Base } from '../styles';
import { useNavigation } from '@react-navigation/native';


const listItem = [
    {
        id: "111",
        image: require("../assets/img/sport-car.png"),
        title: "Rides",
        screen: "Searcher"
    },
    {
        id: "222",
        image: require("../assets/img/bag.png"),
        title: "Travel",
        screen: "Flights" // lägg till
    }
]

export default function TopNav() {

    const navigation = useNavigation();

    return (
        <View style={Base.topnav}>

            <FlatList
                data={listItem}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.1} onPress={() => navigation.navigate(item.screen)}>
                        <View style={Base.topnavItem}>

                            <Image
                                style={{ height: 40, width: 40, margin: 2, resizeMode: "contain" }}
                                source={item.image}
                            />
                            <Text style={{ fontSize: 25, fontWeight: 600 }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity >
                )

                }


            />
        </View>
    )
}

