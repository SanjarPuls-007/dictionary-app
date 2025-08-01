const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const errorMiddleware = (err, req, res, next) => {
	const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR
	const message = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR

	res.status(statusCode).json({
		success: false,
		status: statusCode,
		message: message,
	})
}

module.exports = { errorMiddleware }
