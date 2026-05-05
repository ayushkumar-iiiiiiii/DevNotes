const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('Static'));
app.use(express.json());

app.get('/', (req, res)=>{
    let auth = false;
    if(auth){
        res.sendFile(path.join(__dirname, "./Public", "index.html"))
    }
    else{
        res.redirect("/signup")
    }
})
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname,'./Public', 'signup.html'));
})

app.post("/api/userdata", (req,res)=>{
    let { user_email, user_phone_no, user_username, user_pass } = req.body;
    res.json({massage: "data resived"})
    console.log(user_email, user_phone_no, user_username, user_pass);
})

app.listen('3000', ()=>{
    console.log("server working on port 3000");
})