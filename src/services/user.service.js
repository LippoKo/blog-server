const User = require('../models/User')

const createService = (body) => User.create(body)

module.exports = { createService }
