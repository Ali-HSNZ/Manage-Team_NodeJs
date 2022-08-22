const Router = require('express').Router()

const { authRoutes } = require('./auth')
const { projectRoutes } = require('./project')
const { teamRoutes } = require('./team')
const { userRoutes } = require('./user')

Router.use('/project' , projectRoutes)
Router.use('/user' , userRoutes)
Router.use('/team' , teamRoutes)
Router.use('/auth' , authRoutes)

module.exports = {
    AllRoutes : Router
}