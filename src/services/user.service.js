import User from '../models/User.js'

const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (id, name, surname, email, password) =>
  User.findOneAndUpdate({ _id: id }, { name, surname, email, password })

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
}
