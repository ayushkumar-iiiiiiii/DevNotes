const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('Static'));

app.get('/', (req, res)=>{
    let auth = false;
    if(auth){
        res.sendFile(path.join(__dirname, '/Public', 'index.html'))
    }else{
        res.redirect('/signup')
        res.sendFile(path.join(__dirname, '/Public', 'signup.html'))
    }
})
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname,'/Public', 'signup.html'));
})

app.listen('3000', ()=>{
    console.log("server working on port 3000")
})