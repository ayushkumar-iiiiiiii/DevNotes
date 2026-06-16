import axios from "axios";




// creating the axios instance

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true,
})




// interceptor for checking the error code in responce from the server 

api.interceptors.response.use(
    (response) => {



        return response;
    },
    (error) => {

        if (error.status == 401 && error.response.data.massage == "invalid token") {
            // redirect the user to the ' semting went wrong plzz re loging  '
        }

        if (error.status == 401 && error.response.data.massage == "token expire") {
            api.get('/rotateRtoken')
        }

        if (error.status == 401 && error.response.data.massage == "token not found") {
            // redirect the user to the ' semting went wrong plzz re loging  '
        }

        return error;

    }
)

export default api;