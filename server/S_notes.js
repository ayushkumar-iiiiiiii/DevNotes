const db_fnc = require('./db')


//function for getting the notes data from db

async function get_notes_data(username) {

    const user_id = await db_fnc.get_user_uuid(username)

    const notes_content = await db_fnc.get_notes_indb(user_id)

    console.log("get_notes_data")

    return notes_content;

}


// function for getting pinned note from db


async function get_pinned_notes_data(username) {

    const user_id = await db_fnc.get_user_uuid(username)

    const notes_content = await db_fnc.get_pinned_notes_indb(user_id)

    console.log("get_notes_data")

    return notes_content;

}



// function for updating data in db

async function update_note(note_id, username, title, subject, note_main_contant) {

    if (!note_id) {

        const user_id = await db_fnc.get_user_uuid(username)

        await db_fnc.save_note_indb(user_id, title, subject, note_main_contant)

    }

    if (note_id) {

        await db_fnc.update_note_indb(note_id, title, subject, note_main_contant)

    }


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


// deleting the note

async function delete_note(note_id) {

    try {

        const delete_note_status = await db_fnc.delete_note_indb(note_id)

        return delete_note_status

    } catch (error) {
        console.log(error)
    }

}


// handiling the notes to trash

async function trash_note(note_id, trash_status_param) {

    const set_trash_note_status = await db_fnc.set_trash_indb(note_id, trash_status_param)

    return set_trash_note_status

}

// handiling the notes to archive 

async function archive_note(note_id, archive_status_param) {

    const set_archive_note_status = await db_fnc.set_archive_indb(note_id, archive_status_param)

    return set_archive_note_status

}


// handiling the notes to pinned

async function pinned_note(note_id, pinned_status_param) {

    const set_pinned_note_status = await db_fnc.set_pinned_indb(note_id, pinned_status_param)

    return set_pinned_note_status

}

// handilling the notes to fav

async function fav_note(note_id, fav_status_param) {

    const set_fav_note_status = await db_fnc.set_fav_indb(note_id, fav_status_param)

    return set_fav_note_status

}





// logic for searching the tiltle




// function for changing the searchable string in a vlid format for ts_query

function buildTsQuery(search) {
    const words = search
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) return null;

    return words.map(word => `${word}:*`).join(" & ");
}


// function for search the note by title

async function search_title(searchable_string, username) {

    const title_query = buildTsQuery(searchable_string)

    const user_id = await db_fnc.get_user_uuid(username)

    const search_result = await db_fnc.search_note_by_title_indb(user_id, title_query)

    return search_result
    
}


module.exports = {
    get_notes_data,
    update_note,
    get_one_note,
    get_notes_scrolling,
    delete_note,
    trash_note,
    archive_note,
    fav_note,
    pinned_note,
    get_pinned_notes_data,
    search_title
}