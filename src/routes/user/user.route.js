const { Router } = require('express')
const { UserController } = require('../../controllers/user/user.controller.js')
const { UserValidator } = require('../../validators/user/user.validator.js')
const { expressValidate } = require('../../validators/index.js')
// const { authMiddleware } = require('../../middlewares/auth.middleware.js')

const userRouter = Router()

userRouter.post(
	'/signup-admin',
	UserValidator.signUpAdmin(),
	expressValidate,
	UserController.signUpAdmin
)

userRouter.post(
	'/login',
	UserValidator.login(),
	expressValidate,
	UserController.login
)

module.exports = userRouter
