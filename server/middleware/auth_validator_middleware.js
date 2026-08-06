const isEmail = require("validator/lib/isEmail");
const errors = require("./../error")

const email_validator = async (req, res, next) => {

    const user_email = req.body.user_email

    if (!isEmail(user_email)) {

        return next(new errors.ValidationError('Email is not valid'))
    }

    next()

}



const username_validator = async (req, res, next) => {

    const username = req.body.username

    const usernameRegex = /^[a-zA-Z0-9._-]{3,30}$/

    if (!usernameRegex.test(username)) {
        return next(new errors.ValidationError("Username must be 3 to 30 characters long and contain only letters, numbers, periods (.), underscores (_), and hyphens (-)."))
    }

    next()

}




const phoneNo_validator = async (req, res, next) => {


    const phone_no = req.body.phone_no

    const  phoneRegex = /^\+[1-9]\d{7,14}$/

    if (!phoneRegex.test(phone_no)) {

        return next(new errors.ValidationError("Phone number must be in international format (e.g. +919876543210)"))
    }

    next()

}



const password_validator = async (req, res, next) => {

    const password = req.body.user_pass

    let checkpassword = password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)

    if(!checkpassword) {
        return next(new errors.ValidationError("Invalid password"))
    }

    next()

}


module.exports = {
    email_validator,
    username_validator,
    phoneNo_validator,
    password_validator
}