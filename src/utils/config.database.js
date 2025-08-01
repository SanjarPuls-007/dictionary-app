const { connect } = require('mongoose')
const { MONGO_URI } = require('./secret.js') // Importing MONGO_URL from secret.js
const ConnectDB = async () => {
	try {
		await connect(MONGO_URI)
		console.log('MongoDB connected successfully')
	} catch (error) {
		console.error('MongoDB connection error:', error)
		process.exit(1) // Exit the process with failure
	}
}

module.exports = { ConnectDB } // Exporting the ConnectDB function for use in other files
