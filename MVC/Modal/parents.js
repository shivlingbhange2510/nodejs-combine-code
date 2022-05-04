
const mongoose=require('mongoose');

const parents = new mongoose.Schema({
    "firstName": { type : String, required: true},
    "lastName": { type: String},
    "age": { type : Number, required:true},
    "phoneNumber":{type: Number},
    "emailId": { type : String},
    // "empId":{type : String.mongoose.Schema.Types.ObjectId, ref:"users"}


})

// module.exports=mongoose.model('user', parents)