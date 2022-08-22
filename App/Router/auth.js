const { AuthController } = require('../Http/Controllers/auth.controller')
const { expressValidatorMaper } = require('../Http/Middlewares/checkErrors')
const { registerValidator } = require('../Http/Validations/auth')
const Router = require('express').Router()

Router.post('/register' , registerValidator() ,expressValidatorMaper, AuthController.register )

module.exports = {
    authRoutes : Router
}