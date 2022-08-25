const jwt = require('jsonwebtoken')

function tokenGenerator(username){
    return jwt.sign({username} , "Ali" , {expiresIn : "1 days" })
}
module.exports = {tokenGenerator}