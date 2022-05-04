const express = require('express');
const app= express();
const cors=require('cors');

app.use(cors())
app.use((req, res, next)=>[
    let time = new Date();
    console.log(time + ' ' + 'global scope', req.url)
])
module.exports=app;