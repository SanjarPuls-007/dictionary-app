const { REG_KEY, JWT_SECRET } = require('../../utils/secret')
const { HttpException } = require('../../utils/http_exception')
const { StatusCodes } = require('http-status-codes')
const { UserModel } = require('../../models/user/user.model')
const { RoleNames } = require('../../utils/constants')
const { genSalt, compare, hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class UserController {
	static signUpAdmin = async (req, res) => {
		const { reg_key, name, phone, password } = req.body

		if (reg_key !== REG_KEY) {
			throw new HttpException(
				StatusCodes.UNAUTHORIZED,
				'Invalid registration key'
			)
		}

		const existingUser = await UserModel.findOne({ phone })
		if (existingUser) {
			throw new HttpException(
				StatusCodes.BAD_REQUEST,
				'Admin User with this phone number already exists'
			)
		}

		//Passwordni shiflab saqlash
		const salt = await genSalt(10)
		const hashedPassword = await hash(password, salt)
		if (!hashedPassword) {
			throw new HttpException(
				StatusCodes.INTERNAL_SERVER_ERROR,
				'Error hashing password'
			)
		}

		// const newUser = new UserModel({ name, phone, password: hashedPassword })
		// await newUser.save()
		const newUser = await UserModel.create({
			name,
			phone,
			password: hashedPassword,
		})

		res.status(StatusCodes.CREATED).json({
			success: true,
			msg: 'Admin user created successfully',
			data: {
				name,
				phone,
				password,
			},
		})
	}

	static login = async (req, res) => {
		const { phone, password } = req.body
		const user = await UserModel.findOne({ phone })

		if (!user) {
			throw new HttpException(StatusCodes.NOT_FOUND, 'User not found')
		}

		const isMatch = await compare(password, user.password)
		if (!isMatch) {
			throw new HttpException(
				StatusCodes.UNAUTHORIZED,
				'Invalid phone number or password!'
			)
		}

		const token = sign({ id: user._id, role: user.role }, JWT_SECRET, {
			expiresIn: '1d', // Tokenni 1 kun davomida amal qiladi
		})

		res.status(StatusCodes.OK).json({
			success: true,
			msg: 'User login successful',
			data: {
				token,
				user: {
					name: user.name,
					phone: user.phone,
					role: user.role,
				},
			},
		})
	}
}

module.exports = { UserController }
