const { StatusCodes } = require('http-status-codes')
const { HttpException } = require('../utils/http_exception.js')
const UserModel = require('../models/user.model.js')

const roleMiddleware = role => {
	return async (req, res, next) => {
		const { user_id } = req.user
		const user = await UserModel.findById(user_id)
		if (!role.includes(user.role)) {
			throw new HttpException(
				StatusCodes.FORBIDDEN,
				'Access denied: insufficient permissions'
			)
		}
		next()
	}
}

module.exports = { roleMiddleware }
