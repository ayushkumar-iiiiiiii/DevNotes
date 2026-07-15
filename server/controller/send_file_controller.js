const path = require("path");


const send_signup_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static','scr_html' ,'signup.html'))
   // console.log(`signup page is called in contrler`)
}



// const send_scr_files = async (req, res)=>{
//     res.sendFile(path.join(__dirname, '..', '..', 'scr'))
// }



const send_home_page = async (req, res)=>{

    console.log(req.token_status)

    if(req.token_status == 'not found'){

        res.sendFile(path.join(__dirname, '..', '..', 'Static','scr_html' , 'index.html'))

    }

    if(req.token_status == 'found'){

        res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'notes.html'))

    }
    
    //console.log(`home page is called in contrler`)
}

// const send_notes_page = async (req, res)=>{
//     res.sendFile(path.join(__dirname, '..', '..', 'Static', 'notes.html'))
// }



const send_login_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'login.html'))
}


const send_learnmore_page = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'learnmore.html'))
}


const send_about_page = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'about.html'))
}


const send_contact_page = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'contact.html'))
}


const send_privacy_page = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'privacy.html'))
}


const send_terms_page = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'scr_html' ,'terms.html'))
}


module.exports = {
    send_signup_page,
    // send_scr_files,
    send_home_page,
    send_login_page,
    // send_notes_page,
    send_learnmore_page,
    send_about_page,
    send_contact_page,
    send_privacy_page,
    send_terms_page
}