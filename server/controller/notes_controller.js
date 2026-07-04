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


// controller for getting the notes while scrolling 

const get_scrolling_note_data_cntrl = async (req,res) => {

    try {

        const username = req.user.username

        const note_id = req.query.last_note_id

        const note_data = await S_notes_fnc.get_notes_scrolling(note_id, username)

        res.json(note_data)
        
    } catch (error) {
        console.log(error)
        res.json({
            massage: 'there is error in scrolling note get data'
        })
    }
    
}




// controller for updating the note

const update_note_cntrl = async (req, res) => {

    const note_id = req.body.note_id

    const updated_title = req.body.title

    const updated_subject = req.body.subject;

    const updated_content = req.body.note_main_contant

    try {

        await S_notes_fnc.update_note(note_id, updated_title, updated_subject, updated_content)

        res.status(200).json({
            success: true
        })

    } catch (error) {


        console.log(error)
    }

}




// controller for getting one note data in db

const one_note_data_cntrl = async (req, res) => {

    const note_id = req.query.note_id

    console.log(note_id)

    try {

        const note_data = await S_notes_fnc.get_one_note(note_id)

        console.log(note_data)

        res.status(200).json(note_data)

    } catch (error) {
        console.log(error)
        res.json({
            massage: 'cant get one note data'
        })
    }

}



module.exports = {
    get_notes_data_cntrl,
    update_note_cntrl,
    one_note_data_cntrl,
    get_scrolling_note_data_cntrl
}