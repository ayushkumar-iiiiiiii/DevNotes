const express = require('express');
const router = express.Router();
const path = require("path");
const send_file_controller_functions = require('../controller/send_file_controller')
const { protect_route, get_device_info } = require('./../middleware/auth_middleware')





router.get('/api/notes',
    send_file_controller_functions.send_notes_page
)


// router.get('/api/notes/:id',
//     send_file_controller_functions.send_notes_page
// )



router.get('/signup',
    send_file_controller_functions.send_signup_page,
    // send_file_controller_functions.send_scr_files
    //console.log(`singup is called sendfile routes`)
);



router.get('/login',
    send_file_controller_functions.send_login_page
)


router.get('',
    send_file_controller_functions.send_home_page,
    //console.log(`homepage is being called in sendfile routes`)
)

module.exports = router;