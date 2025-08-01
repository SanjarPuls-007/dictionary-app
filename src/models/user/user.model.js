const { Schema, model } = require('mongoose')
const { CollectionNames, RoleConstants } = require('../../utils/constants')

const documentSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true, // Removes whitespace from both ends of the string
		},
		phone: {
			type: String,
			required: true,
			trim: true, // Removes whitespace from both ends of the string
			unique: true, // Ensures that the phone number is unique in the collection
		},
		password: {
			type: String,
			required: true,
			trim: true, // Removes whitespace from both ends of the string
			minlength: 8, // Minimum length of the password
		},
		role: {
			type: String,
			lowercase: true, // Converts the role to lowercase
			required: true,
			default: RoleConstants.ADMIN, // Default role is admin
			enum: [RoleConstants.USER, RoleConstants.ADMIN],
		}, // Role of the user
	},
	{
		timestamps: true,
		versionKey: false,
	}
) // Automatically adds createdAt and updatedAt fields

const UserModel = model(
	CollectionNames.USER,
	documentSchema,
	CollectionNames.USER
) // 'User' is the name of the collection in MongoDB

module.exports = { UserModel }
