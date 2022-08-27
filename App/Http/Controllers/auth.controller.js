const { UserModel } = require("../../Models/user");
const hashString = require("../../Modules/hashString")
const bcrypt = require('bcrypt');
const { tokenGenerator } = require("../../Modules/tokenGenerator");
// const verifyToken = require("../../Modules/verifyToken");


class AuthController{
    async register(req , res , next){
       try {
            const {username , password , email , mobile} = req.body;

            const user = await UserModel.create({
                username,
                password : hashString(password),
                email,
                mobile
            })
            res.status(201).json({
                status : 200,
                success : true,
                resualt : {username : user.username ,
                                email : user.email ,
                                skills : user.skills , 
                                teams : user.teams ,
                                mobile : user.mobile , 
                                roles: user.roles 
                }
            })
       } catch (error) {
        next(error)
       } 
    }   

    async login(req,res,next){
        try {
            const {username , password} = req.body
            const user = await UserModel.findOne({username})
            
            //! Error Handler
            if(!user) throw {status : 401 , message : "نام کاربری  اشتباه است" , success : false}
            const verifyPassword = bcrypt.compareSync(password , user.password)
            if(!verifyPassword) throw {status : 401 , message : "رمز عبور اشتباه است" , success : false}

            //*  Ok And Send Success Response
            const token = tokenGenerator(user.username)
            user.token = token;
            user.save()
            return res.status(200).json({
                status : 200,
                message : "با موفقیت وارد حساب کاربری خود شده اید",
                success : true,
                token
            })

        } catch (error) {
            next(error)
        }
    }

    resetPassword(){

    }
}
module.exports = {
    AuthController : new  AuthController() 
}