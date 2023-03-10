const express = require('express')
const app = express()
const connectDatabase = require('./src/database/db')

const userRoute = require('./src/routes/user.route')

const PORT = 3001

connectDatabase()
app.use(express.json())
app.use('/user', userRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
