const { validationResult } = require('express-validator')
const { HttpException } = require('../utils/http_exception.js')
const { StatusCodes } = require('http-status-codes')

const expressValidate = (req, res, next) => {
	const errors = validationResult(req)
	let errorMessages = ''

	if (errors.isEmpty()) {
		return next()
	}

	// errors.array().forEach(error => {
	// 	errorMessages += `${error.msg} `
	// })
	errors.array().map(error => {
		errorMessages += error.msg + ' '
	})

	// res.status(400).json({
	// 	success: false,
	// 	msg: errorMessages.trim(),
	// })
	throw new HttpException(
		StatusCodes.UNPROCESSABLE_ENTITY,
		errorMessages.trim()
	)
}

module.exports = { expressValidate }
