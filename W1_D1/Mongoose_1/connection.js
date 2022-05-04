const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true})
.then(()=>{
    console.log('connected succesfully')
})
.catch((er)=>{
    console.log('errMsg : ', er)
})
console.log('first')