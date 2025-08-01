const { check, body, param, query } = require('express-validator')

class UserValidator {
	static signUpAdmin = () => [
		body('name').notEmpty().withMessage('Name is required'),
		body('phone').isMobilePhone().withMessage('Phone number is not valid'),
		body('password')
			.notEmpty()
			.withMessage('Password is required')
			.isStrongPassword({
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
			.withMessage(
				'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a symbol'
			),
	]
	static signUp = () => [
		body('name').notEmpty().withMessage('Name is required'),
		body('email').isEmail().withMessage('Email is not valid'),
		body('password')
			.notEmpty()
			.withMessage('Password is required')
			.isStrongPassword({
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
			.withMessage(
				'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a symbol'
			),
	]
	static login = () => [
		body('phone')
			.isMobilePhone()
			.withMessage('Phone number is not valid')
			.notEmpty()
			.withMessage('Phone number is required'),
		body('password')
			.notEmpty()
			.withMessage('Password is required')
			.isLength({ min: 8 })
			.withMessage('Password must be at least 8 characters long'),
	]
}

module.exports = { UserValidator }
