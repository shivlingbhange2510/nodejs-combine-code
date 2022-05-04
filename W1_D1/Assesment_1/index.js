const express = require('express');
const app= express()
var http = require('http');
// console.log('hii', app)

// app.listen(())
const data=[
    {
        "name":'Javascript book',
    },
    {
        "name":'Reactjs book',
        
    },
     {
        "name":'Java book',
      
    }
    ,
    {
        "name":'Flutter book',
        
    }
]
app.get('/home', (req, res)=>{
    res.send('called hello')
})
app.get('/books', (req, res)=>{
    res.send(data)
})


app.listen(3000, (req, res)=>{
    // res.send('hiii crated')
    res?.write('hii server created successfully')
    res?.end();
    console.log('server running on port 3000 successfully')
})