import axios from "axios";




// creating the axios instance

const data_api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true,
})



const page_api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    withCredentials: true,
})



// interceptor for checking the error code in responce from the server 

data_api.interceptors.response.use(
    (response) => {



        return response;
    },
    (error) => {

        if (error.status == 401 && error.response.data.massage == "invalid token") {
            // redirect the user to the ' semting went wrong plzz re loging  '

            console.log('invalid token')
        }

        if (error.status == 401 && error.response.data.massage == "token expire") {
            data_api.get('/rotateRtoken')
            console.log('rotetion started')
        }

        if (error.status == 401 && error.response.data.massage == "token not found") {
            // redirect the user to the ' semting went wrong plzz re loging  '
            console.log('token not found')
        }

        return error;

    }
)

export {data_api, page_api};