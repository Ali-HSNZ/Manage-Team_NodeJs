const { UserController } = require('../Http/Controllers/user.controller')
const {autoLogin} = require('../Http/Middlewares/autoLogin')
const imageValidator = require('../Http/Validations/user')
const { upload_multer } = require('../Modules/uploadImage_multer');
const { expressValidatorMaper } = require('../Http/Middlewares/expressValidatorMaper')

const Router = require('express').Router()

Router.get('/list' ,autoLogin , UserController.getUserlist)
Router.get('/' ,autoLogin , UserController.getProfile)
Router.post('/profile' , autoLogin , UserController.editProfile);
Router.post('/upload-image' ,
    upload_multer.single('image'),
    imageValidator(),  
    expressValidatorMaper,
    autoLogin,
    UserController.uploadImage_multer,
)



module.exports = {
    userRoutes : Router
}