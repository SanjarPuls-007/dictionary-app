const { config } = require('dotenv')
config()
const PORT = process.env.PORT || 5050
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const REG_KEY = process.env.REG_KEY

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const AWS_REGION = process.env.AWS_REGION
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
const AWS_URL = process.env.AWS_URL

module.exports = {
	PORT,
	MONGO_URI,
	JWT_SECRET,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	AWS_REGION,
	AWS_BUCKET_NAME,
	AWS_URL,
	REG_KEY,
}
