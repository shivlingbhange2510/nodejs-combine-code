
const mongoose=require('mongoose');

const user = new mongoose.Schema({
    "firstName": { type : String, required: true},
    "lastName": { type: String},
    "age": { type : Number, required:true},
    "phoneNumber":{type: Number},

})

module.exports=mongoose.model('user', user)