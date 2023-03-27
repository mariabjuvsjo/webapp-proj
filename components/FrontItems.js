import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Base } from '../styles'


const listItem = [
    {
        id: "111",
        image: require("../assets/img/sport-car.png"),
        title: "Rides",
        screen: "Home"
    },
    {
        id: "222",
        image: require("../assets/img/salad.png"),
        title: "Delivery",
        screen: "Delivery" // lägg till
    },
    {
        id: "333",
        image: require("../assets/img/parcel.png"),
        title: "Package",
        screen: "Home"
    },
    {
        id: "444",
        image: require("../assets/img/bag.png"),
        title: "Travel",
        screen: "Delivery" // lägg till
    }
]

const listItem2 = [
    {
        id: "123",
        image: require("../assets/img/pickup.png"),
        title: "Book a Ride",
        undertitle: "Best drivers in town"
    },
    {
        id: "456",
        image: require("../assets/img/group.png"),
        title: "Book Xl for big Groups",
        underTitle: "Legroom for everyone" // lägg till
    },

]


const FrontItems = () => {
    return (
        <View>
            <View>
                <Text style={styles.title}>Suggestions</Text>

                <FlatList
                    style={styles.container}
                    data={listItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style={Base.suggestions} >
                            <View style={Base.suggestionsBox}>

                                <Image
                                    style={{ height: 45, width: 45, margin: 2 }}
                                    source={item.image}
                                />

                            </View>
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>{item.title}</Text>
                        </TouchableOpacity >



                    )

                    }





                />
            </View>
            <View>
                <Text style={styles.title}>Ways to plan with lifta</Text>
                <FlatList
                    style={{ flexDirection: 'row' }}
                    data={listItem2}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                style={{ height: 165, width: 255, margin: 2 }}
                                source={item.image} />
                            <Text>{item.title}</Text>
                            <Text>{item.undertitle}</Text>


                        </View>



                    )

                    }





                />


            </View>
        </View>
    )
}

export default FrontItems

const styles = StyleSheet.create({
    container: {
        margin: 10

    },

    title: {
        fontSize: 23,
        fontWeight: 500,
        margin: 10
    }


})