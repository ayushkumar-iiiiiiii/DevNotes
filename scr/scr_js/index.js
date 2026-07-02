import {data_api, page_api} from "./apis"
import "./../scr_css/index.css"


// getting all the nessecry element from dom

const login_btn = document.getElementById('LoginBtn')

const signup_btn = document.getElementById('SignUpBtn')

const gettingStarted_btn = document.getElementById('getstarted')

const learnMore_btn = document.getElementById('learnmore')




// ALL THE EVENT LISTNER

//event listiner for loging btn

login_btn.addEventListener('click' ,() => {

    window.location.href = '/login'

})


//event listiner for signup btn

signup_btn.addEventListener('click', () => {

    window.location.href = '/signup'

})


//event listiner for getting started btn

gettingStarted_btn.addEventListener('click', () => {

    window.location.href = '/signup'

})


//event listner for learn more btn

learnMore_btn.addEventListener('click', () => {

    window.location.href = '/learnmore'

})