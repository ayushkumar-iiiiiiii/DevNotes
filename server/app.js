const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const auth_router = require("./routes/auth_routes")
const send_file_router = require('./routes/send_files_routs')
const notes_router = require("./routes/notes_router")




app.use(cookieParser());

app.use(express.json());

app.use('/', send_file_router,
    //console.log(`homepage is called in app.js`)
)

// app.use('/signup', send_file_router, 
//    // console.log(`signup page is been caled in app.js`)
// );

app.use('/api/signup', auth_router);

app.use('/api/login', auth_router);

app.use('/api/logout', auth_router)

app.use('/api/rotateRtoken', auth_router);

app.use('/api/notes', notes_router);


app.use(express.static(
    path.join(__dirname, '..', 'Static')
))



const port = process.env.PORT


app.listen( port, () => {
    console.log(`server running of port ${port}`)
})




