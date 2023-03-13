const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post('/create', userController.create)
router.get('/', userController.findAll)
router.get('/:id', userController.findById)
router.patch('/:id', userController.update)

module.exports = router
