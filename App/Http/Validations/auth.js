const {body} = require('express-validator');
const { UserModel } = require('../../Models/user');
function register(){
    return [
        body("username").notEmpty().isLength({min : 4 , max : 20}).custom(async(username) => {

            if(username){
                const checkUserNameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi
                if(checkUserNameRegex.test(username)){
                    const user = await UserModel.findOne({username})
                    if(user) throw 'نام کاربری تکراری میباشد'
                    return true
                }throw "نام کاربری نمی تواند خالی باشید"
            }
            throw   "نام کاربری نمی تواند خالی باشد"
        }),
        
        body('email').isEmail().withMessage("ایمیل وارد شده صحیح نمی باشد").custom(async email => {
            const user = await UserModel.findOne({email})
            if(user) throw 'ایمیل  تکراری میباشد'
        }),

        body('mobile').isMobilePhone('fa-IR').withMessage("شماره موبایل وارد شده صحیح نمیباشد").custom(async mobile => {
            const user = await UserModel.findOne({mobile})
            if(user) throw 'شماره موبایل  تکراری میباشد'
        }),
        
        body('password').isLength({min : 4 , max : 20}).withMessage("رمز عبور حداقل باید 4 و حداکثر 20 نویسه باشد").custom((value , ctx) => {
           console.log(value);
            if(!value) throw  "رمز عبور نمی تواند خالی باشد"
            if(value !== ctx?.req?.body?.confirmPassword) throw  "رمز عبور با تکرار آن یکسان نمی باشد"
            return true
        })

    ]
}
function login() {
    return[
        body('username').notEmpty().custom(async username => {
            const checkUserNameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi
           if(!checkUserNameRegex.test(username)) throw " نام کاربری  باید حداقل 2 نویسه باشد"
        }),
        body('password').notEmpty().withMessage("رمز ورود نمی تواند خالی باشد")
    ]
}
module.exports = {
    registerValidator : register,
    loginValidation : login
}