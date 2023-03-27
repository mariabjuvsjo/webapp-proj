import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setTravelInfo } from '../slices/navSlice';

const Map = () => {

    const mapRefe = useRef(null);

    const dispatch = useDispatch()


    const origin = useSelector(selectOrigin)

    const destination = useSelector(selectDestination)

    const origin2 = { latitude: origin.location.lat, longitude: origin.location.lng };
    const destination2 = { latitude: destination.location.lat, longitude: destination.location.lng };

    const origin3 = `${origin.location.lat},${origin.location.lng}`
    const des3 = `${destination.location.lat},${destination.location.lng}`
    useEffect(() => {

        if (!origin || !destination) return;

        console.log('fittosupplier')

        mapRefe.current.fitToSuppliedMarkers(["origin", "destination"],
            {
                edgePadding:
                {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50
                }

            }, { animated: true })


    }, [origin, destination]);

    useEffect(() => {

        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            &origins=${origin3}&destinations=${des3}&key=${GOOGLE_MAPS_APIKEY}`
            ).then((res) => res.json())
                .then(data => {

                    console.log(data)

                    dispatch(
                        setTravelInfo(data.rows[0].elements[0])
                    )



                })

            console.log(URL)

        }

        getTravelTime()



    }, [origin, destination, GOOGLE_MAPS_APIKEY]);


    return (

        <MapView
            ref={mapRefe}
            style={styles.map}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin2}
                    destination={destination2}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeColor="black"
                    strokeWidth={3}


                />


            )}


            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier={"origin"}
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="destination"
                    description={destination.description}
                    identifier={"destination"}
                />
            )}
        </MapView>

    )
}

export default Map

const styles = StyleSheet.create(
    {
        map: {
            ...StyleSheet.absoluteFillObject,
            margin: 10

        }


    }
)