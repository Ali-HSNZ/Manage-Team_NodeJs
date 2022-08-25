const verifyToken = require("../../Modules/verifyToken");
const {UserModel} = require('../../Models/user')

async function autoLogin(req,res,next){
    try {
        req.user = null
        req.isLogin = false

        const token = req.headers.token;
        const {username} = verifyToken(token)
        const user = await  UserModel.findOne({username} , {roles : 0 , createdAt : 0 , updatedAt : 0 , __v : 0 , password: 0})
        if(!user) throw {message : "کاربری با این مشخصات پیدا نشد. لطفا مجدد وارد حساب کاربری خود شوید" , status : 401 , success : false}

        req.user = user
        req.isLogin = true
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    autoLogin
}