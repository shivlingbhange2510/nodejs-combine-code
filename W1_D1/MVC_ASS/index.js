const http = require('http');
const app = require('./Routes/library');
const connectToDB = require('./DBConnection/mongoDB');
const PORT = 5000;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    
    console.log(`Server is running on port no ${PORT}`)
});

