const db_fnc = require('./../db')







// middleware for deleting the trash note

const delete_trash_note = async (req, res, next) => {

    const username = req.user.username

    const user_id = await db_fnc.get_user_uuid(username)

    await db_fnc.delete_trash_note_indb(user_id)

    next()
    
}



module.exports = {
    delete_trash_note
}