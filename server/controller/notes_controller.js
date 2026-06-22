const S_notes_fnc = require('./../S_notes')




// controller for getting the data for notes

const get_notes_data_cntrl = async (req, res) => {

    try {

        const username = req.user.username

        const notes_data = await S_notes_fnc.get_notes_data(username)

        console.log(username)

        res.json(notes_data)

    } catch (error) {

        res.json({
            error: 'there is some error'
        })

    }

}


// controller for updating the note

const update_note = async (req, res) => {

    const note_id = req.body.note_id

    const updated_title = req.body.title
    
    const updated_subject = req.body.subject;
    
    const updated_content = req.body.note_main_contant

    try {
        
        await S_notes_fnc.update_note(note_id, updated_title, updated_subject, updated_content)

    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    get_notes_data_cntrl,
    update_note
}