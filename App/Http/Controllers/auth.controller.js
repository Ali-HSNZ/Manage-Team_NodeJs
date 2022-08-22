const { UserModel } = require("../../Models/user");
const hashString = require("../../Modules/hashString")

class AuthController{
    async register(req , res , next){
       try {
            const {username , password , email , mobile} = req.body;

            const user = await UserModel.create({
                username,
                password : hashString(password),
                email,
                mobile
            }).catch(error => {
                if(error.code===11000) throw {status : 400 , message : "نام کاربری قبلا در سیستم ثبت شده است"}
            })
            res.status(201).json(user)
       } catch (error) {
        next(error)
       } 
    }   

    login(){

    }

    resetPassword(){

    }
}
module.exports = {
    AuthController : new  AuthController() 
}