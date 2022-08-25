const { AuthController } = require('../Http/Controllers/auth.controller')
const { expressValidatorMaper } = require('../Http/Middlewares/expressValidatorMaper')
const { registerValidator , loginValidation} = require('../Http/Validations/auth')

const Router = require('express').Router()

Router.post('/register' , registerValidator() , expressValidatorMaper , AuthController.register )
Router.post('/login' , loginValidation() , expressValidatorMaper  , AuthController.login)

module.exports = {
    authRoutes : Router
}