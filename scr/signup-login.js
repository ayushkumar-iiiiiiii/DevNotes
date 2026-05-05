import axios from "axios";

const signup_btn = document.getElementById('signup-btn');
const login_btn = document.getElementById('login-btn');


async function sendcred() {
    try {
        let user_email = document.getElementById('email').value;
        let user_phone_no = document.getElementById('phone-no').value;
        let user_username = document.getElementById('username').value;
        let user_pass = document.getElementById('user-pass').value;
        const response = await
        axios.post('http://localhost:3000/api/userdata', {
            user_email,
            user_phone_no,
            user_username,
            user_pass
        })
    }
    catch(err){
        console.log(err);
    }
}

signup_btn.addEventListener("click", sendcred)
