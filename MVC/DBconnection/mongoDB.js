const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    // db.createUser({user:'shiv', pwd:'shiv@123',roles:['dbOwner']})

    mongoose.connect(
      `mongodb://127.0.0.1:27017/test`,
      // mongodb://shiv:shiv@123localhost:27017
      // `mongodb://shiv:shiv@123@localhost:27017/movies`,
      { useNewUrlParser: true }
    );
    // .then(()=>{
    //     console.log('connected succesfully')
    // })
    // .catch((er)=>{
    //     console.log('errMsg : ', er)
    // })

    mongoose.connection.once("open", () => {
      console.log("connection establish succesfully");
    });
    mongoose.connection.on("error", () => {
      console.log("errr");
    });
  }
}
module.exports = Mongo;
