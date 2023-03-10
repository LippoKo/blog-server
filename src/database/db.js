const mongoose = require('mongoose')

const connectDatabase = () => {
  console.log('Wait, connecting to the database ...')

  mongoose.set('strictQuery', true)

  mongoose
    .connect(
      'mongodb+srv://bloglippoko:lipp36264419@cluster0.r72kxfb.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('MongoDB Atlas connected!'))
    .catch((error) => console.log(error))
}

module.exports = connectDatabase
