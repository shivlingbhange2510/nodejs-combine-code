const bcrypt = require('bcrypt');

const encryptPassword =(plainPass)=>{
    const encryptPass = bcrypt.hashSync(plainPass, 10 )
}

module.exports