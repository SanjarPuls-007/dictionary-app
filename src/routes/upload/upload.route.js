const { Router } = require('express')
const uploadFile = require('../../utils/file-upload.js')
const {
	UploadController,
} = require('../../controllers/upload/upload.controller.js')
const { authMiddleware } = require('../../middlewares/auth.middleware.js')

const uploadRouter = Router()
uploadRouter.post(
	'/',
	// authMiddleware,
	uploadFile.single('image'),
	UploadController.uploadFile
)

module.exports = uploadRouter
