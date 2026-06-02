const jwt = require("jsonwebtoken");
require('dotenv').config();
const db_functions = require('./db');
const bcrypt = require("bcrypt");






// creating access token 

const access_create_token = (username) => {
    const token = jwt.sign(
        {
            username: username,
        },
        process.env.ACCESS_JWT_SECRET,
        {
            expiresIn: "100s"
        }
    )
    return token;
}

// creating refresh token 

const refresh_create_token = (username) => {
    const token = jwt.sign(
        {
            username: username,
        },
        process.env.REFRESH_JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )
    return token;
}





// function for checking eamil availability by query the data base

async function check_email_availability(email) {

    let email_availability = db_functions.checkemail_indb(email);

    return email_availability;

}



// function for checking phone number availability by query the data base

async function check_phone_number_availability(phone_number) {

    let phone_no_availibility = db_functions.check_phone_number_indb(phone_number);

    return phone_no_availibility;

}




// function for checking username availability by query the data base

async function check_username_availability(username) {

    let username_availability = db_functions.check_username_indb(username);

    return username_availability;

}





// function for making user signup

async function making_user_signup(

    user_email,
    user_phone_no,
    user_username,
    user_pass_unhash

) {

    // hashing the password

    let user_pass_hash = await bcrypt.hash(user_pass_unhash, 10)

    if (

        check_email_availability(user_email) &&
        check_phone_number_availability(user_phone_no) &&
        check_username_availability(user_username)

    ) {

        let inserted_cred_status = inserting_cred_indb(

            user_email,
            user_phone_no,
            user_username,
            user_pass_hash

        )

        return true;

    } else {

        console.log(`there is some error in check email function or check phone function or check username function`)

        return false;

    }

}








module.export = {
    check_email_availability,
    check_phone_number_availability,
    check_username_availability,
}




