const userModal = require('../Modal/user')
const emailService = require('../Notification/emailServices')
const parentModal = require('../Modal/parents')
const express = require('express');
const app = express();
const JWTService = require('../CommonLib/JWTtoken')
const saveImageLocal =  (req, res, next) => {

  console.log('request file ', req.file);
  let res1 =  req.file.path;

 res.json(res1)
  //  {
  //   "message" : "Image saved",
  //   path: res1
  // })
 
}
const signIn=  (req, res, next)=>{
  console.log('re body', req.body);
  let userDetails={
    "firstName":"shivling",
    "lastName": "bhange",
    "email":"shivlingbhange134@gmail.com",
    "role":"admin"

  }
 let token=  JWTService.generateToken(userDetails)
  res.json({
    "status":"suceess",
    "token": token
  })
}

const signUp=(req, res, next)=>{
  const userDetails=re.body;
}
const sendEmail = async (req, res, next) => {
  const message = req.body.message;

  let response = await emailService.sendMail({
    from: '"Shivling Bhange 👻" <shivlingbhange2510@gmail.com>', // sender address
    to: "shivlingbhange134@gmail.com", // list of receivers
    subject: "Hello world ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Helllo ${message}</b>`, // html body
  })
  console.log('response mail : ', response);
  res.send(true)
}
const getUser = async (req, res, next) => {
  console.log('hiii ')
  // res.render('home')
  try {
    let response = await userModal.find({});
    res.json(response);
    // let userDetails = req.body;
    // let response=await userModal.insertMany([userDetails]);
    // console.log('res', response)
    // let {firstName, lastName,phoneno} = req.body

    // res.json(response);
  } catch (er) {
    console.log('post err : ', er)
  }
}

const shivling = (req, res, next) => {
  console.log('hii shivling routes');
  res.send('hii shivling routes')
}
app.post("/user", async (req, res, next) => {

  try {
    let userDetails = req.body;
    let response = await userModal.insertMany([userDetails]);
    console.log('res', response)
    // let {firstName, lastName,phoneno} = req.body
    let parentInfo = {
      empId: response._id,
      firstName: req.body.parents.firstName,
      lastName: req.body.parents.lastName,
      age: req.body.parents.age,
      phoneNo: req.body.parents.phoneNo,

    }
    console.log(parentInfo)
    await parentModal.insertMany([parentInfo]);


    res.json(response);
  } catch (er) {
    console.log('post err : ', er)
  }

});

const getUserById = async (req, res, next) => {
  console.log('update user')
  try {
    let userId = req.param.userId;
    // let response=await userModel.find({_id:userId})
    let response = await userModal.find({ _id: userId })

    console.log('resby id ', userId);
    res.json(response);
  }
  catch (er) {
    console.log('get erro in Id : ', er)
  }
}
const createUser = (req, res, next) => {
  console.log('cretateUser user')
}
const deleteUser = (req, res, next) => {
  console.log('update user')
}
const updateUser = (req, res, next) => {
  console.log('update user')
}



module.exports = {
  getUser,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  shivling,
  sendEmail,
  saveImageLocal,
  signIn

}