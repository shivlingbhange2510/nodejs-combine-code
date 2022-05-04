const express = require("express");
const app = express();
const userModel= require('./user');
const bodyParser= require('body-parser');

app.use(bodyParser.json([]))

app.post("/user", async (req, res, next) => {
 
  try{
    let userDetails = req.body;
    let response=await userModel.insertMany([userDetails]);
    console.log('res', response)
    res.json(response);
  }catch(er){
    console.log('post err : ', er)
  }

});

app.get("/user", async (re, res) => {
  try {
    let response = await userModel.find({});
    res.json(response);
  } catch (er) {
    console.log("er", er);
  }
});


app.get("/user/:userId", async ( req, res)=>{
  try{
    let userId=req.param.userId;
    let response=await userModel.find({_id:userId})
    console.log('resby id ', userId);
    res.json(response);
  }
  catch(er){
    console.log('get erro in Id : ', er)
  }
   
})

// // below update api
// app.put('/user/:userId', async(req, res)=>{
//     let userId=req.param.userId;
//     let body=req.body;

//     let response = await userModel.find({_id:userId}, {$set: body})
//     res.json(response)
// })

// app.delete('/user:userId', async (req, res)=>{
//     let userId = req.params.userId;

//     let response = await userModel.deleteOne({_id:userId})
//     res.json(response)
// } )

module.exports=app