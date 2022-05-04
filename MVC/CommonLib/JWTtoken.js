var jwt = require('jsonwebtoken');
const SECREATE_KEY= "MY_secreate_key"
function generateToken(payload){
    var token = jwt.sign(payload, SECREATE_KEY);
    return token
}



module.exports={
    generateToken
}