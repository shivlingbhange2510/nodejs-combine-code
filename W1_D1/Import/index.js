const app = require('./app');
const http=require('http');
const PORT=4000;

http
app.get('/user', (req,res,next)=>[
    res.send('hii first user route')
])