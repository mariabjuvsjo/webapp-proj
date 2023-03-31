import { AVIATIONSTACK_APIKEY } from '@env'



const flightModel = {

    getflights: async function getflights(iata) {

        let allData;
        await fetch(`http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_APIKEY}&dep_iata=${iata}`)
            .then((response) => response.json())
            .then((data) => allData = data);



        return allData



    },






}

export default flightModel