const auth_functions = require('../auth')








// 1) controller for checking the DB that there is email is already exist or not 

const check_email_availability_controller = async (req, res) => {

    let email = req.body.user_email;

    let email_availability = auth_functions.check_email_availability(email)

    if (email_availability) {

        res.json({
            exists: "exist"
        })

    } else {

        res.json({
            exists: "available"
        })

    }

}






// 2) controller for checking phone.no

const check_phone_number_availability_controller = async (req, res) => {

    let phone_number = req.body.phone_no;

    let phone_no_availibility = auth_functions.phone_no_availibility(phone_number);

    if (phone_no_availibility) {

        res.json({
            phone_no: 'available'
        })

    } else {

        res.json({
            phone_no: 'not_available'
        })

    }

}





// 3) controller for checking user name 

const check_username_availability_controller = async (req, res) => {

    let username = req.body.username;

    let username_availability = auth_functions.check_username_availability(username);

    if (username_availability) {

        res.json({
            exists: "exist"
        })

    } else {

        res.json({
            exists: "available"
        })

    }

}





// controller for making user signup

const user_signup_ftn = async (req, res) => {

    let user_email = req.body.user_email;
    let user_phone_no = req.body.user_phone_no;
    let user_username = req.body.user_username;
    let user_pass_unhash = req.body.user_pass;

    let signup_status = auth_functions.making_user_signup(
        
        user_email,
        user_phone_no,
        user_username,
        user_pass_unhash,

    )

    if (signup_status){
        res.json({
            signup_status: "ture"
        })
    } else{
        res.json({
            signup_status: "false"
        })
    }

    

}




module.exports = {

    check_email_availability_controller,
    check_phone_number_availability_controller,
    check_username_availability_controller,
    user_signup_ftn

}



