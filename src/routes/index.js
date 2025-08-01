const userRouter = require('./user/user.route.js')
const uploadRouter = require('./upload/upload.route.js')
const dictionaryRouter = require('./dictionary/dictionary.route.js')
const sectionRouter = require('./section/section.route.js')
const categoryRouter = require('./category/category.route.js')
const wordsRouter = require('./words/words.route.js')
const main_router = [
	{ path: '/user', router: userRouter },
	{ path: '/upload', router: uploadRouter },
	{ path: '/dictionary', router: dictionaryRouter },
	{ path: '/section', router: sectionRouter },
	{ path: '/category', router: categoryRouter },
	{ path: '/words', router: wordsRouter },
]

module.exports = { main_router }
