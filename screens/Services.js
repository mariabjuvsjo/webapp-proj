import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Base } from '../styles'



const Services = () => {
    return (
        <View>
            <Text style={styles.title}>Services</Text>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Go Anywhere, Get Anything</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.box}>
                    <TouchableOpacity style={Base.suggestions} >
                        <View style={Base.suggestionsBoxBig}>

                            <Image
                                style={{ height: 45, width: 45, margin: 2, resizeMode: 'contain' }}
                                source={require("../assets/img/sport-car.png")}
                            />
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Rides</Text>
                        </View>

                    </TouchableOpacity >
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={Base.suggestions} >
                        <View style={Base.suggestionsBoxBig}>

                            <Image
                                style={{ height: 45, width: 45, margin: 2, resizeMode: 'contain' }}
                                source={require("../assets/img/bag.png")}
                            />
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Travel</Text>
                        </View>

                    </TouchableOpacity >
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.box}>
                    <TouchableOpacity style={Base.suggestions} >
                        <View style={Base.suggestionsBoxMedium}>

                            <Image
                                style={{ height: 45, width: 45, margin: 2, resizeMode: 'contain' }}
                                source={require("../assets/img/parcel.png")}
                            />
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Package</Text>
                        </View>
                    </TouchableOpacity >
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={Base.suggestions} >
                        <View style={Base.suggestionsBoxMedium}>
                            <Image
                                style={{ height: 45, width: 45, margin: 2, resizeMode: 'contain' }}
                                source={require("../assets/img/salad.png")}
                            />
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Food</Text>
                        </View>
                    </TouchableOpacity >
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={Base.suggestions} >
                        <View style={Base.suggestionsBoxMedium}>

                            <Image
                                style={{ height: 45, width: 45, margin: 2, resizeMode: 'contain' }}
                                source={require("../assets/img/calender.png")}
                            />
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Reserve</Text>
                        </View>

                    </TouchableOpacity >
                </View>
            </View>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: 600,
        padding: 10

    },

    box: {
        margin: 5
    },


    bigImageWrapp: {
        height: 165,
        width: 255,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        margin: 10

    },

    bigImage: {
        height: 165,
        width: 255,
        resizeMode: 'contain',
        borderRadius: 10,

    }

})