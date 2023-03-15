import express from 'express'
import connectDatabase from './src/database/db.js'
import userRoute from './src/routes/user.route.js'

const app = express()
const PORT = 3000

connectDatabase()
app.use(express.json())
app.use('/user', userRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
