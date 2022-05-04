
const express = require('express');
const app= require('./app');
var http = require('http');
const connectToDb=require('./mongoDb')
const userModel=require('./user')

http.createServer(app).listen(3000, ()=>{
    new connectToDb();
    console.log('server running on port 3000 successfully yu')
})

// app.listen(3000, (req, res)=>{
//     // res.send('hiii crated')
// //    new mongo()
//     new connectToDb();
//     console.log('server running on port 3000 successfully yu')
// })