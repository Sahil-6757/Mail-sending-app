const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const fs = require('fs');
const user = require('./mailerdetail')

const mail = nodemailer.createTransport({
    service:'gmail',    
    auth: {
        user:'Arbaz151033@gmail.com',
        pass:'opbxstomlovlouvn'
    }
})

mail.sendMail({
    from : 'Arbaz151033@gmail.com',
    to: 'sahil151033@gmail.com',
    subject:'Hello',
    text:'Hello from arbaz khan',
    html:'Html tag'
},(err,info)=>{
    if(err)
    {
        console.log('Error',err)
    }
    else
    {
        console.log('Mail send')
    }
})

app.get('/',(req,res)=>{
    const htmlFile = fs.readFileSync('index.html');
    res.end(htmlFile);
})

app.post('/index.html',(req,res)=>{
    res.end("Hello")
})

app.listen(8000,()=>{
    console.log("Hello from port 8000")
})