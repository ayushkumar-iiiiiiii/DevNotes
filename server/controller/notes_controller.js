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



// get pinned note controller


const get_pinned_notes_data_cntrl = async (req, res) => {

    try {

        const username = req.user.username

        const notes_data = await S_notes_fnc.get_pinned_notes_data(username)

        console.log(username)

        res.json(notes_data)

    } catch (error) {

        res.json({
            error: 'there is some error'
        })

    }

}



// controller for getting the notes while scrolling 

const get_scrolling_note_data_cntrl = async (req, res) => {

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

    const username = req.user.username

    const note_id = req.body.note_id

    const updated_title = req.body.title

    const updated_subject = req.body.subject;

    const updated_content = req.body.note_main_contant

    console.log('data in controller', username, note_id, updated_title, updated_subject, updated_content)

    try {

        await S_notes_fnc.update_note(note_id, username, updated_title, updated_subject, updated_content)

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





// controller for deleting the note

const delete_note_cntrl = async (req, res) => {

    const note_id = req.params.note_id

    const delete_note_status = await S_notes_fnc.delete_note(note_id)

    if (delete_note_status) {

        res.status(200).json({
            massage: 'success'
        })

    } else {

        res.json({
            massage: 'fail'
        })

    }

}




// controller for setting the note attribute

const set_note_attri_cntrl = async (req, res) => {

    const note_id = req.body.note_id
    const attri_category = req.body.attri
    const attri_value = req.body.status

    if (attri_category == 'trash') {

        const trash_note_status = await S_notes_fnc.trash_note(note_id, attri_value)

        if (trash_note_status) {

            res.status(200).json({
                massage: 'success'
            })

        } else {

            res.json({
                massage: 'fail'
            })

        }

    }

    if (attri_category == 'archive') {

        const archive_note_status = await S_notes_fnc.archive_note(note_id, attri_value)

        if (archive_note_status) {

            res.status(200).json({
                massage: 'success'
            })

        } else {

            res.json({
                massage: 'fail'
            })

        }

    }

    if (attri_category == 'pinned') {

        const pinned_note_status = await S_notes_fnc.pinned_note(note_id, attri_value)

        if (pinned_note_status) {

            res.status(200).json({
                massage: 'success'
            })

        } else {

            res.json({
                massage: 'fail'
            })

        }

    }

    if (attri_category == 'fav') {

        const fav_note_status = await S_notes_fnc.fav_note(note_id, attri_value)

        if (fav_note_status) {

            res.status(200).json({
                massage: 'success'
            })

        } else {

            res.json({
                massage: 'fail'
            })

        }

    }

}




// controller for handling the title search

const title_search_cntrl = async (req, res) => {

    const searchable_string = req.query.q

    const username = req.user.username

    const search_result = await S_notes_fnc.search_title(searchable_string, username)

    res.json({search_result})

}



module.exports = {
    get_notes_data_cntrl,
    update_note_cntrl,
    one_note_data_cntrl,
    get_scrolling_note_data_cntrl,
    delete_note_cntrl,
    set_note_attri_cntrl,
    get_pinned_notes_data_cntrl,
    title_search_cntrl
}