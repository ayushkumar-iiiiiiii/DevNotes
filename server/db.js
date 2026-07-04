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

        const result = await pool.query("INSERT INTO users(email , username , phone_number , hash_password) VALUES($1,$2,$3,$4)",
            [user_email, user_username, user_phone_no, user_pass_hash]
        )

        return {
            inserting_cred_indb_status: true
        };

    } catch (error) {

        if (error.code === '23505') {

            console.log(error.constraint)

        } if (error) {

            console.log(error)

        }

        return {
            inserting_cred_indb_status: false
        };

    }

}




// function for storing the refresh token in Data base

async function insert_refresh_token_hash_indb(user_id, refresh_token_hash, device_info, created_time, expire_time) {

    try {

        //console.log(`starting the function for inserting the refresh token in db ${user_id} ${refresh_token_hash} ${device_info} ${created_time} ${expire_time}`)

        const result = await pool.query("INSERT INTO refresh_tokens(user_id , token_hash , device_info , created_at , expires_at) VALUES($1,$2,$3,$4,$5)",
            [user_id, refresh_token_hash, device_info, created_time, expire_time]
        )

        return {
            insert_refresh_token_hash_indb_status: true
        }

    } catch (error) {

        console.log(error)

        return {
            insert_refresh_token_hash_indb_status: false
        }

    }

}





// function for getting user uuid by query the database by username

async function get_user_uuid(username) {
    try {

        console.log(username)

        const result = await pool.query("SELECT user_id FROM users WHERE username = $1 LIMIT 1",
            [username]
        )

        //console.log(result)

        // make a if statment for preventing when user not found and rows are null

        let user_id = result.rows[0].user_id;

        return user_id;

    } catch (error) {
        console.log(error)
    }
}




// getting the pass hash by email

async function get_pass_hash_by_email(email) {

    try {

        const result = await pool.query("SELECT hash_password FROM users WHERE email = $1 LIMIT 1",
            [email]
        )

        return result.rows[0].hash_password;

    } catch (error) {
        console.log(error)
    }

}






// getting password hash by username

async function get_pass_hash_by_username(username) {

    try {

        const result = await pool.query("SELECT hash_password FROM users WHERE username = $1 LIMIT 1",
            [username]
        )

        return result.rows[0].hash_password

    } catch (error) {
        console.log(error)
    }

}




// function for getting the username by email

async function get_username_by_email(email) {

    try {

        const result = await pool.query('SELECT username FROM users WHERE email = $1',
            [email]
        )

        return result.rows[0].username

    } catch (error) {
        console.log(error)
    }

}



// function for getting the email by username

async function get_email_by_username(username) {

    try {

        const result = await pool.query('SELECT email FROM users WHERE username = $1',
            [username]
        )

        return result.rows[0].email

    } catch (error) {
        console.log(error)
    }

}



// function for deleting the refresh token

async function rotate_Rtoken_indb(old_Rtoken_hash, new_Rtoken_hash) {

    try {

        const result = await pool.query("UPDATE refresh_tokens SET token_hash = $1 WHERE token_hash = $2",
            [new_Rtoken_hash, old_Rtoken_hash]
        )

    } catch (error) {
        console.log(error)
    }

}













// LOGIC FOR NOTES 

// getting the notes for a perticular user

async function get_notes_indb(user_id, last_update_time, note_id) {

    if (last_update_time == null) {

        console.log('last upedated note is not workig in db')

        try {

            const result = await pool.query("SELECT note_id, content, title, subject, tags, TO_CHAR(created_at, 'DD/MM/YY') AS created_date, TO_CHAR(created_at, 'HH24:MI') AS created_time FROM notes WHERE user_id = $1 ORDER BY updated_at DESC LIMIT 40",
                [user_id]
            )

            return result.rows

        } catch (error) {
            console.log(error)
        }
    }

    if (last_update_time !== null) {

        console.log('last upedated note is workig in db')

        console.log(user_id, last_update_time, note_id)

        try {

            const result = await pool.query("SELECT note_id, content, title, subject, tags, TO_CHAR(created_at, 'DD/MM/YY') AS created_date, TO_CHAR(created_at, 'HH24:MI') AS created_time FROM notes WHERE user_id = $1 AND (updated_at, note_id) < ($2, $3) ORDER BY updated_at DESC LIMIT 40",
                [user_id, last_update_time, note_id]
            )

            console.log(result.rows)

            return result.rows

        } catch (error) {
            console.log(error)
        }

    }

}


// function for getting timestamp using the note id

async function get_timestamp_by_note_id(note_id) {

    try {

        const result = await pool.query("SELECT updated_at FROM notes WHERE note_id = $1",
            [note_id]
        )
        
        return result.rows[0].updated_at

    } catch (error) {
        console.log(error)
    }
    
}





// function for updating the note updating/saving changes

async function update_note_indb(note_id, title, subject, note_main_contant) {

    try {

        console.log(note_id)

        const result = await pool.query(" UPDATE notes SET title = $1, subject = $2, content = $3, updated_at = NOW() WHERE note_id = $4",
            [title, subject, note_main_contant, note_id]
        )

    } catch (error) {
        console.log(error)
    }

}



// function for getting only one note

async function get_one_note_indb(note_id) {

    try {

        const result = await pool.query("SELECT content, title, subject, tags, TO_CHAR(created_at, 'DD/MM/YY') AS created_date, TO_CHAR(created_at, 'HH24:MI') AS created_time FROM notes WHERE note_id = $1",
            [note_id]
        )

        return result.rows
        
    } catch (error) {
        console.log(error)
    }
    
}




module.exports = {
    check_email_indb,
    check_phone_number_indb,
    check_username_indb,
    inserting_cred_indb,
    insert_refresh_token_hash_indb,
    get_user_uuid,
    get_pass_hash_by_email,
    get_pass_hash_by_username,
    rotate_Rtoken_indb,
    get_notes_indb,
    update_note_indb,
    get_username_by_email,
    get_email_by_username,
    get_one_note_indb,
    get_timestamp_by_note_id
}