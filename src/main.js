const express = require('express')
const cors = require('cors')
const { PORT } = require('./utils/secret.js')
const app = express()
const { ConnectDB } = require('./utils/config.database.js')
const { main_router } = require('./routes/index.js')
const { errorMiddleware } = require('./middlewares/error.middleware.js')
require('./utils/cron-job.js') // Import cron job to ensure it runs

void ConnectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

main_router.forEach(route => {
	app.use(route.path, route.router)
})

app.use(errorMiddleware)

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`)
})
