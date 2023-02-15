const path = require("path");
const express = require('express');
const app = express();

const staticpath = path.join(__dirname,'../public/');

app.use(express.static(staticpath));


app.get('/',(req,res)=>{
   
})

app.listen(8000,()=>{
    console.log('127.0.0.1:8000');
})
