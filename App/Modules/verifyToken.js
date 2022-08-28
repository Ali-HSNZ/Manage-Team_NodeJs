const jwt = require('jsonwebtoken')


function verifyToken(token){
    try {
        const resualt = jwt.verify(token, "Ali")
        if(!resualt.username) throw {status : 400 , success : false , message : "لطفا مجدد وارد حساب کاربری خود شوید"}
        return resualt
    } catch (error) {
        throw {status : 400 , success : false , message : "لطفا مجدد وارد حساب کاربری خود شوید"}
    }
}

module.exports = verifyToken