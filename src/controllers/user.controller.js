const userService = require('../services/user.service')
const mongoose = require('mongoose')

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
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid id' })
  }

  const user = await userService.findByIdService(id)

  if (!user) {
    return res.status(400).send({ message: 'User not found' })
  }

  res.send(user)
}

const update = async (req, res) => {
  const { name, surname, email, password } = req.body

  if (!name && !surname && !email && !password) {
    res.status(400).send({ message: 'Submit all the fields for registration!' })
  }

  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid Id' })
  }

  const user = await userService.findByIdService(id)

  if (!user) {
    return res.status(404).send({ message: 'User not found' })
  }

  await userService.updateService(id, name, surname, email, password)

  res.send({ message: 'User updated successfully!' })
}

module.exports = { create, findAll, findById, update }
