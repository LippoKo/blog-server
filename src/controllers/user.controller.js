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

const findAll = async (req, res) => {
  const users = await userService.findAllService()

  if (users.length === 0) {
    return res.status(400).send({ message: 'There are no registered users' })
  }

  res.send(users)
}

const findById = async (req, res) => {
  const user = req.user
  res.send(user)
}

const update = async (req, res) => {
  const { name, surname, email, password } = req.body

  if (!name && !surname && !email && !password) {
    res.status(400).send({ message: 'Submit all the fields for registration!' })
  }

  const { id, user } = req

  await userService.updateService(id, name, surname, email, password)

  res.send({ message: 'User updated successfully!' })
}

module.exports = { create, findAll, findById, update }
