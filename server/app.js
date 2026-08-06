const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const auth_router = require("./routes/auth_routes")
const send_file_router = require('./routes/send_files_routs')
const notes_router = require("./routes/notes_router")
const { errorHandler } = require("./middleware/globle_error_middleware")




app.use(cookieParser());

app.use(express.json());

app.use('/', send_file_router,)

app.use('/api/signup', auth_router);

app.use('/api/login', auth_router);

app.use('/api/logout', auth_router)

app.use('/api/rotateRtoken', auth_router);

app.use('/api/notes', notes_router);


app.use(express.static(
    path.join(__dirname, '..', 'Static')
))

app.use(errorHandler)

const port = process.env.PORT


app.listen( port, () => {
    console.log(`server running of port ${port}`)
})




