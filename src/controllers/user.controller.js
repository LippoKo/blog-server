const userService = require('../services/user.service')

const create = async (req, res) => {
  const { name, surname, email, password } = req.body

  if (!name || !surname || !email || !password) {
    res.status(400).send({ message: 'Submit all the fields for registration!' })
  }

  const user = await userService.createService(req.body)

  if (!user) {
    return res.status(400).send({ message: 'Error creating user' })
  }

  res.status(201).json({
    message: 'User created successfully!',
    user: {
      id: user._id,
      name,
      surname,
      email,
    },
  })
}

module.exports = { create }
