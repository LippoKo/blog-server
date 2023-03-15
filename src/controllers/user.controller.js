import userService from '../services/user.service.js'

const create = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    if (!name || !surname || !email || !password) {
      res
        .status(400)
        .send({ message: 'Submit all the fields for registration!' })
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
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService()

    if (users.length === 0) {
      return res.status(400).send({ message: 'There are no registered users' })
    }

    res.send(users)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const findById = async (req, res) => {
  try {
    const user = req.user
    res.send(user)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    if (!name && !surname && !email && !password) {
      res
        .status(400)
        .send({ message: 'Submit all the fields for registration!' })
    }

    const { id, user } = req

    await userService.updateService(id, name, surname, email, password)

    res.send({ message: 'User updated successfully!' })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export default { create, findAll, findById, update }
