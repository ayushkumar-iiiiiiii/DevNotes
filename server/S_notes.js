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



// getting one note data in db

async function get_one_note(note_id) {

    const note_data = await db_fnc.get_one_note_indb(note_id)

    return note_data
    
}


// getting notes while scrolling

async function get_notes_scrolling(note_id, username) {

    const user_id = await db_fnc.get_user_uuid(username)

    const timestamp = await db_fnc.get_timestamp_by_note_id(note_id)

    const notes_content = await db_fnc.get_notes_indb(user_id, timestamp, note_id)

    return notes_content
    
}


module.exports = {
    get_notes_data,
    update_note,
    get_one_note,
    get_notes_scrolling
}