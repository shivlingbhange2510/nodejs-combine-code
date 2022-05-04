const express = require('express');
const app = express();
const user=require('./user');
console.log('user', user)

app.get('/', (req, res)=>{
    res.send( user)
    res.send( user)

})

function check(user){
    let checkName=true,checkEmail=true, checkLastName=true, checkPincode=true, checkAge=true,checkGender=true;
    if(user.first_name==''||user.first_name==undefined){
        checkName=false;
    }
}

app.get('/user', (req, res, next)=>{
    res.send('hii server created')
    if(user.email.length==6){

    }
})


app.listen(2000, (req, res)=>{
    console.log('server run successfully');
    // res.send('hii server created successfully')
    // res?.end();
    // res?.send('sever runs thanks for running')
})

// Hi mam 
// this is shivling Bhange here
// last friday I was on leave and come to my hometown due to some serious  court issues at my family 
// I want to say that I can't be come at office for some days  due to court hiring, this is unaccidental condiction 
// so I request you mam give me WFH for some days until this court issues re