import axios from "axios";



// creating the axios instance

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true,
})




// interceptor for checking the error code in responce from the server 

api.interceptors.response.use(
    (response)=>{

        

        return response;
    }, 
    (error)=>{

        console.log(error);

        return error;

    }
)

export default api;