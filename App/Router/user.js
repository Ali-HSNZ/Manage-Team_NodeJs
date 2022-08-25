const { UserController } = require('../Http/Controllers/user.controller')
const {autoLogin} = require('../Http/Middlewares/autoLogin')
const { expressValidatorMaper } = require('../Http/Middlewares/expressValidatorMaper')
const Router = require('express').Router()

Router.post('/profile' , autoLogin , UserController.editProfile)


module.exports = {
    userRoutes : Router
}