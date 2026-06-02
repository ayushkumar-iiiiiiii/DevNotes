const path = require("path");


const send_signup_page = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Static', 'signup.html'))
}

const send_scr_files = async (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'scr'))
}

module.exports = {
    send_signup_page,
    send_scr_files
}