const { Router } = require('express')
const {
	WordsController,
} = require('../../controllers/words/words.controller.js')
const { expressValidate } = require('../../validators/index.js')
const { WordsValidator } = require('../../validators/words/words.validator.js')
const wordsRouter = Router()

wordsRouter.get('/get-all', expressValidate, WordsController.getAll)

wordsRouter.get('/get-by-id/:id', expressValidate, WordsController.getById)

wordsRouter.post(
	'/add',
	WordsValidator.add(),
	expressValidate,
	WordsController.add
)

wordsRouter.put(
	'/update/:id',
	WordsValidator.update(),
	expressValidate,
	WordsController.update
)

wordsRouter.delete('/delete/:id', expressValidate, WordsController.delete)

module.exports = wordsRouter
