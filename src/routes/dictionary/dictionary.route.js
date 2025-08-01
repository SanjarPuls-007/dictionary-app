const { Router } = require('express')
const {
	DictionaryController,
} = require('../../controllers/dictionary/dictionary.controller.js')
const { expressValidate } = require('../../validators/index.js')
const {
	DictionaryValidator,
} = require('../../validators/dictionary/dictionary.validator.js')
const dictionaryRouter = Router()

dictionaryRouter.get('/get-all', expressValidate, DictionaryController.getAll)

dictionaryRouter.get(
	'/get-by-id/:id',
	expressValidate,
	DictionaryController.getById
)

dictionaryRouter.post(
	'/add',
	DictionaryValidator.add(),
	expressValidate,
	DictionaryController.add
)
dictionaryRouter.put(
	'/update/:id',
	DictionaryValidator.update(),
	expressValidate,
	DictionaryController.update
)
dictionaryRouter.delete(
	'/delete/:id',
	expressValidate,
	DictionaryController.delete
)

module.exports = dictionaryRouter
