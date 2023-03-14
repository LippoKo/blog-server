const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { validID, validUser } = require('../middlewares/global.middlewares')

router.post('/create', userController.create)
router.get('/', userController.findAll)
router.get('/:id', validID, validUser, userController.findById)
router.patch('/:id', validID, validUser, userController.update)

module.exports = router
