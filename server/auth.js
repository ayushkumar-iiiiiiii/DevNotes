const jwt = require("jsonwebtoken");
require('dotenv').config();
const db_functions = require('./db');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { create } = require("domain");






// creating access token 

const access_create_token = (username) => {
    const token = jwt.sign(
        {
            username: username,
        },
        process.env.ACCESS_JWT_SECRET,
        {
            expiresIn: "15m"
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
            expiresIn: "1d"
        }
    )
    return token;
}





// function for checking eamil availability by query the data base

async function check_email_availability(email) {

    let email_availability = await db_functions.check_email_indb(email);

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

        let inserted_cred_status = await db_functions.inserting_cred_indb(

            user_email,
            user_phone_no,
            user_username,
            user_pass_hash

        )

        const refresh_token_storing_service_status = await refresh_token_storing_service(user_username)

        console.log(refresh_token_storing_service_status)

        let access_token = refresh_token_storing_service_status.access_token;
        let refresh_token = refresh_token_storing_service_status.refresh_token;

        console.log(`refresh token ${refresh_token}
        access token ${access_token}`)

        return {
            access_token: access_token,
            refresh_token: refresh_token,
            making_user_signup_status: true
        };

    } else {

        console.log(`there is some error in check email function or check phone function or check username function`)

        return {
            making_user_signup_status: false
        };

    }

}







// function for hashing the refresh token

function creat_refresh_token_hash(refresh_token) {
    try {

        let refresh_token_hash = crypto
            .createHash('sha256')
            .update(refresh_token)
            .digest('hex')

        return {
            refresh_token_hash: refresh_token_hash
        }

    } catch (error) {

        console.log(error)

    }
}






// function for finding the creation time and expiry time of jwt refresh token

function get_create_at_and_expire_at(refresh_token) {

    const decoded = jwt.decode(refresh_token);

    const created_at = new Date(decoded.iat * 1000)
    const expire_at = new Date(decoded.exp * 1000)

    return {
        created_at: created_at,
        expire_at: expire_at
    }

}






// storing the refresh token in db with the created time and expriry time by making Orchestration

async function refresh_token_storing_service(username) {

    const access_token = access_create_token(username);

    const refresh_token = refresh_create_token(username);

    const created_time_and_expire_time = get_create_at_and_expire_at(refresh_token);

    const create_at = created_time_and_expire_time.created_at;

    const expire_at = created_time_and_expire_time.expire_at;

    const divice_info = "test divice";

    const refresh_token_hash = creat_refresh_token_hash(refresh_token);

    console.log(`refresh token hash = ${refresh_token_hash.refresh_token_hash}`)

    const user_uuid = await db_functions.get_user_uuid(username);

    try {

        const inserted_refresh_token_status = await db_functions.insert_refresh_token_hash_indb(user_uuid, refresh_token_hash.refresh_token_hash, divice_info, create_at, expire_at)

        if (inserted_refresh_token_status.insert_refresh_token_hash_indb_status) {

            console.log(`moving forword to return tokens`) 

            return {
                access_token: access_token,
                refresh_token: refresh_token,
                refresh_token_storing_service_status: true
            }

        } else {
            return {
                refresh_token_storing_service_status: false
            }
        }

    } catch (error) {
        console.log(error)
    }


}











module.exports = {
    check_email_availability,
    check_phone_number_availability,
    check_username_availability,
    making_user_signup
}




