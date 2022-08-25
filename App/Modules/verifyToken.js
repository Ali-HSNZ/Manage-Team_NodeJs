const jwt = require('jsonwebtoken')


function verifyToken(token){
    try {
        const resualt = jwt.verify(token, "Ali")
        if(!resualt.username) throw {message : "احراز هویت انجام نشد. لطفا مجدد وارد حساب کاربری خود شوید"}
        return resualt
    } catch (error) {
        throw {message : "احراز هویت انجام نشد. لطفا مجدد وارد حساب کاربری خود شوید"}
    }
}

module.exports = verifyToken