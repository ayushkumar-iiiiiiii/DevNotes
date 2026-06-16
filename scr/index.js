import api from "./apis"

const btn = document.getElementById("btn")

btn.addEventListener("click", async ()=>{
    const response = await api.get("/home")
    if(response.status == 401){
        console.log('fuckyou')
    }
     console.log(response)   
})