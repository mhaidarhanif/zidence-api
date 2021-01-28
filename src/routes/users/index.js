const router = require('express').Router()
const users = require('./middlewares')
// Get all users
router.get('/', users.getAll)

module.exports = router