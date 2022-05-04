const mongoose=require('mongoose');

const books =new mongoose.Schema({
    "author_name": {type:String},
    "checkedInTime":{type:String},
    "checkedOutTime": {type:String},

})
module.exports= mongoose.model('books',books);
