const express = require('express');
const router = express.Router();
const auth_controller = require('../controller/auth_controller');



router.post('/check_email', auth_controller.check_email_availability_controller );

router.post('/check_username', auth_controller.check_username_availability_controller);

router.post('/check_phone_no', auth_controller.check_phone_number_availability_controller);

router.post('/signup', auth_controller.user_signup_ftn);


module.exports = router;