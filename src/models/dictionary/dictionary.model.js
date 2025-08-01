const { Schema, model } = require('mongoose')
const { CollectionNames } = require('../../utils/constants')

const documentSchema = new Schema(
	{
		type: {
			type: String,
			default: 'historical',
			enum: ['historical', 'modern'],
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		desc: {
			type: String,
			trim: true,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
) // Automatically adds createdAt and updatedAt fields

const DictionaryModel = model(
	CollectionNames.DICTIONARY,
	documentSchema,
	CollectionNames.DICTIONARY
) // 'Dictionary' is the name of the collection in MongoDB

module.exports = { DictionaryModel }
