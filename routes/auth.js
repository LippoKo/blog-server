const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

// ! SIGNUP
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({ username, password: hashedPassword })
    await user.save()

    res.status(201).json({ message: 'User created successfully!' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error!' })
  }
})

// ! LOGIN
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials!' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password!' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error!' })
  }
})

module.exports = router
