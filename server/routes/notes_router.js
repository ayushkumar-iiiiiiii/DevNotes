const express = require('express');
const router = express.Router();
const {protect_route} = require('./../middleware/auth_middleware');
const notes_cntrl = require("./../controller/notes_controller");
const send_file_controller_functions = require('../controller/send_file_controller')

//console.log(notes_cntrl)







router.get('/get_notes', protect_route, notes_cntrl.get_notes_data_cntrl)

router.get('/get_pinned_notes', protect_route, notes_cntrl.get_pinned_notes_data_cntrl)

router.get('/scrolling_get_notes', protect_route, notes_cntrl.get_scrolling_note_data_cntrl)

router.patch('/save-note', protect_route, notes_cntrl.update_note_cntrl)

router.get('/get_one_note', protect_route, notes_cntrl.one_note_data_cntrl)

router.delete('/delete-note/:note_id', protect_route, notes_cntrl.delete_note_cntrl)

router.post('/set_attri', protect_route, notes_cntrl.set_note_attri_cntrl)

router.get('/search',protect_route, notes_cntrl.title_search_cntrl)

//router.get('/:id',  send_file_controller_functions.send_notes_page)










module.exports = router;