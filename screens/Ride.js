import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Map from "../components/Map";
import From from "../components/From";
import To from "../components/To"
import { Base } from "../styles";
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

export default function Ride() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={Base.container}>
            <View style={Base.toAndFrom}>
                <TouchableOpacity style={Base.btnBack2}
                    onPress={() => navigation.navigate('Searcher')}
                >

                    <Ionicons name={"arrow-back-outline"} size={25} />
                </TouchableOpacity>
                <From />
                <To />
            </View>

        </SafeAreaView>
    );

}