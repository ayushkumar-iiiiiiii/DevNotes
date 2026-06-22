const path = require("path");


const send_signup_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'signup.html'))
   // console.log(`signup page is called in contrler`)
}



// const send_scr_files = async (req, res)=>{
//     res.sendFile(path.join(__dirname, '..', '..', 'scr'))
// }



const send_home_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'index.html'))
    //console.log(`home page is called in contrler`)
}

const send_notes_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'notes.html'))
}



const send_login_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'login.html'))
}


module.exports = {
    send_signup_page,
    // send_scr_files,
    send_home_page,
    send_login_page,
    send_notes_page
}