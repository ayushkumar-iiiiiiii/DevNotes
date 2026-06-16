const express = require('express');
const router = express.Router();
const auth_controller = require('../controller/auth_controller');
const { get_device_info } = require('./../middleware/auth_middleware')



router.post('/check_email', auth_controller.check_email_availability_controller );

router.post('/check_username', auth_controller.check_username_availability_controller);

router.post('/check_phone_no', auth_controller.check_phone_number_availability_controller);

router.post('/signup', get_device_info, auth_controller.user_signup_fnc);

router.post('/login', get_device_info, auth_controller.user_login_fnc);

router.get('', get_device_info, auth_controller.rotate_Rtoken_cntl)


module.exports = router;