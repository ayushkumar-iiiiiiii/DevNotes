const db_fnc = require('./db')


//function for getting the notes data from db

async function get_notes_data(username) {

    const user_id = await db_fnc.get_user_uuid(username)

    const notes_content = await db_fnc.get_notes_indb(user_id)

    console.log("get_notes_data")

    return notes_content;
    
}


// function for updating data in db

async function update_note(note_id, title, subject, note_main_contant) {
    
    await db_fnc.update_note_indb(note_id, title, subject, note_main_contant)

}


module.exports = {
    get_notes_data,
    update_note
}