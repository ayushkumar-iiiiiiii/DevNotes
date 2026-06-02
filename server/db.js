const pool = require("./dbconfig");



// running a query in data base for checking the email

async function check_email_indb(email) {

    try {
        const result = await pool.query("SELECT email FROM users WHERE email = $1 LIMIT 1",
            [email]
        )
        if (result.rows.length > 0) {

            return false;

            console.log('email already exist');

        } else {
            return true;

            console.log(" email is available");
        }
    } catch (error) {
        console.log(error)
    }

}




// running a query in data base for checking the phone number is exist more then 3 times or not

async function check_phone_number_indb(phone_number) {

    try {

        let result = await pool.query("SELECT COUNT(*) FROM users WHERE phone_number = $1",
            [phone_number]
        )
        count = Number(result.rows[0].count);
        if (count < 3) {
            return true
        } else {
            return false
        }

    } catch (error) {

        console.log(error)

    }
}




// running a query in data base for checking the username is exist already or not

async function check_username_indb(username) {

    try {
        const result = await pool.query("SELECT username FROM users WHERE username = $1 LIMIT 1",
            [username]
        )
        if (result.rows.length > 0) {

            return false

            console.log('username already exist')
        } else {

            return true

            console.log("username is available for use");
        }
    } catch (error) {
        console.log(error)
    }

}




// function for inserting the user cred in data base 


async function inserting_cred_indb(
    user_email,
    user_phone_no,
    user_username,
    user_pass_hash
) {

    try {

        await pool.query("INSERT INTO users(email , username , phone_number , hash_password) VALUES($1,$2,$3,$4)",
            [user_email, user_username, user_phone_no, user_pass_hash]
        )

        return true;
        
    } catch (error) {

        if (error.code === '23505') {

            console.log(error.constraint)

        } if (error) {

            console.log(error)

        }

        return false;

    }

}


module.exports = {
    check_email_indb,
    check_phone_number_indb,
    check_username_indb,
    inserting_cred_indb
}