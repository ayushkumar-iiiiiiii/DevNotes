const express = require('express');
const router = express.Router();
const path = require("path");
const send_file_controller_functions = require('../controller/send_file_controller')


router.get('/',
    send_file_controller_functions.send_signup_page,
    send_file_controller_functions.send_scr_files
);

module.exports = router;