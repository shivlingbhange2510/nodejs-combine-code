const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const libraryController = require('../Controller/library')

app.use(bodyParser.json([]));
app.get('/',(req, res, next)=>{
    console.log('hit get re');
    res.send('hii homepage this is ')
})

app.get('/books', libraryController.getAllBooks )
app.post('/books', libraryController.postBookData)
module.exports = app;