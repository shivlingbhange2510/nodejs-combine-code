const express = require("express");
const app = express();
const { engine } =require('express-handlebars');
const userModel= require('../Modal/user');
const userController= require('../Controllers/user')
const bodyParser= require('body-parser');
const multer = require('multer');
const upload2=require('../FileUpload/fileUpload')
// let x= 
// diskStorage
// const diskStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log('dirr ', __dirname)
//     cb(null, `${__dirname}/public`)
//     // cb(null, '/tmp/my-uploads')
//     // console.log(cb(null, `${__dirname}/public`))
//   },
//   filename: function (req, file, cb) {
//     console.log('first', file)
//     const ext = file.mimetype.split("/")[1]
//     cb=(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     // cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })
// const upload = multer({ storage: diskStorage });
 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/public`)
  },
  filename: function (req, file, cb) {
     const ext = file.mimetype.split("/")[1]
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+'.'+ext
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
app.post("/saveImages", upload2.single('file'), userController.saveImageLocal);
app.post("/signIn", userController.signIn)
app.post("/signUp")
app.set('view engine', 'handlebars');
app.set('views', './views');
let x= userController.getUser;
app.get('/shivling', userController.shivling)
app.get('/user', userController.getUser);

app.get("/user:id", userController.getUserById)
app.get("/user:id", userController.deleteUser)
app.get('/user:id', userController.updateUser)
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
app.post("/sendEmail", userController.sendEmail);

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



module.exports=app

// SMPT: simple mail transfer protocall;