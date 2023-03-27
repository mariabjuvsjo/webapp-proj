import config from '../config/config.json'



const authModel = {

    register: async function register(email, password) {
        const data = {
            api_key: config.api_key,
            email: email,
            password: password
        };
        const response = await fetch(`${config.base_url}/register`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }

            })

        return await response.json()
    },
    login: async function login(email, password) {
        const data = {
            api_key: config.api_key,
            email: email,
            password: password
        };
        const response = await fetch(`${config.base_url}/login`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }

            })

        const result = await response.json()


        console.log(result)
        return result






    }
}

export default authModel