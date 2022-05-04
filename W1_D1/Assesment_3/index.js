const express = require('express');
const app = express();
const user=require('./user');

const book=[
    // 'shiv', 'sachin', 'raj', 'raj',"sachin",'Mohan'
    {"name": 'shiv'}
]
app.get('/books',(req, res)=>{
    //  console.log('hii this info req',reqquery);
    res.send('hii app running assesment no 3', book)
})
app.get('/all', (req, res)=>{
    res.send('hii app running assesment no all', user)

} )
app.listen(3000, (req, res)=>{
    console.log('server running on port No 3000')
})