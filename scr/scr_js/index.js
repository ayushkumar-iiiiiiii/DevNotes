import {data_api, page_api} from "./apis"
import "./../scr_css/index.css"


// getting all the nessecry element from dom

const login_btn = document.getElementById('LoginBtn')

const signup_btn = document.getElementById('SignUpBtn')

const gettingStarted_btn = document.getElementById('getstarted')

const learnMore_btn = document.getElementById('learnmore')

const about_btn = document.getElementById('aboutBtn')

const privacy_btn = document.getElementById('privacyBtn')

const terms_btn = document.getElementById('tremBtn')

const contact_btn = document.getElementById('contactBtn')

const github_btn = document.getElementById('githubBtn')




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

    window.open('/learnmore' , '_blank')

})


// event listner for about page

about_btn.addEventListener('click', () => {

    window.open('/about', '_blank') 

})


// event listner for contact page

contact_btn.addEventListener('click', () => {

    window.open('/contact', '_blank')

})


// event listner for privacy page

privacy_btn.addEventListener('click', () => {

    window.open('/privacy', '_blank')

})


// event listner for terms

terms_btn.addEventListener('click', () => {

    window.open('/terms', '_blank')

})


// event listner for github repo

github_btn.addEventListener('click', () => {

    window.open('https://github.com/ayushkumar-iiiiiiii/DevNotes', '_blank')

})