const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const auth_router = require("./routes/auth_routes")
const send_file_router = require('./routes/send_files_routs')




app.use(cookieParser());

app.use(express.json());

app.use('/signup', send_file_router);

app.use('/api/signup', auth_router);

app.use(express.static(
    path.join(__dirname, '..', 'Static')
))


app.listen('3000', '0.0.0.0', ()=> {
    console.log(`server running of port 3000`)
})




