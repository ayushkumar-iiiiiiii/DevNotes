const express = require('express');
const router = express.Router();
const {protect_route} = require('./../middleware/auth_middleware');
const notes_cntrl = require("./../controller/notes_controller");
const send_file_controller_functions = require('../controller/send_file_controller')

//console.log(notes_cntrl)







router.get('/get_notes', protect_route, notes_cntrl.get_notes_data_cntrl)

router.patch('/save-note', protect_route, notes_cntrl.update_note)

//router.get('/:id',  send_file_controller_functions.send_notes_page)










module.exports = router;