const express = require('express');
const router = express.Router();
const auth_controller = require('../controller/auth_controller');
const { get_device_info, protect_route } = require('./../middleware/auth_middleware')

const {

    email_validator,
    username_validator,
    phoneNo_validator,
    password_validator
    
} = require('./../middleware/auth_validator_middleware')







router.post('/check_email',
    email_validator,
    auth_controller.check_email_availability_controller);



router.post('/check_username',
    username_validator,
    auth_controller.check_username_availability_controller);



router.post('/check_phone_no',
    phoneNo_validator,
    auth_controller.check_phone_number_availability_controller);




router.post('/signup',
    email_validator,
    username_validator,
    phoneNo_validator,
    password_validator,
    get_device_info,
    auth_controller.user_signup_fnc);



router.post('/login', get_device_info, auth_controller.user_login_fnc);

router.delete('/logout', protect_route, auth_controller.logout_user_cntl)

router.get('', get_device_info, auth_controller.rotate_Rtoken_cntl)


module.exports = router;