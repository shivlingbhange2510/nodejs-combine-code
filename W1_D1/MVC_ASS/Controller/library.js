
// const booksModel= require('../Models/books')
const bookModel = require('../Models/book');
const authorModel = require('../Models/author')


const getAllBooks= async (req, res, next)=>{
    try {
        console.log('get all books')
        let response = await  bookModel.find({})
        console.log('first', response)
        // res.json(response);
        res.json(response)
    } catch (error) {
        console.log('getbooks : error : ', error);
    }
}
const home = async (req, res, next)=>{
    try {
        // let res1='shiv';
        res.send('shivling')
    } catch (error) {
        console.log(error)
        
    }
}

const postBookData= async (req, res, next)=>{
    try {
        const bookData=req.body;
        let response = await bookModel.insertMany([bookData])
        res.json(response);
    } catch (error) {
        console.log('error postBookData : ', error)
        
    }
}
module.exports={
    getAllBooks,
    home,
    postBookData,
}