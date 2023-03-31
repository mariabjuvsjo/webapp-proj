import config from '../config/config.json'


const placeModel = {

    getPlaces: async function getPlaces(token) {

        let allData;

        await fetch(`${config.base_url}/data?api_key=${config.api_key}`, {
            headers: {
                'x-access-token': token
            }
        })
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                allData = result.data;
            });

        return allData






    },

    createPlaces: async function createPlaces(token, artefacts) {

        let allData;

        let data = {
            artefact: JSON.stringify(artefacts),
            api_key: config.api_key

        }

        await fetch(`${config.base_url}/data`, {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
            },
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                allData = result.data;
            });


        return allData;
    },

    checkPlaceIsCreated: async function checkPlaceIsCreated(token) {
        const userData = await this.getPlaces(token);


        if (userData.length < 1) {
            userData = await this.createPlaces(token);
        }
        return userData;
    },

    getArteFactAsObject: async function getArteFactAsObject(token) {

        let arteArr = []
        let data = await this.getPlaces(token);

        data.forEach((element) => {

            let x = JSON.parse(element.artefact)

            arteArr.push(x)



        })

        return arteArr








    }


}

export default placeModel