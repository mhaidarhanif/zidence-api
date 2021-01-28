const router = require('express').Router()
const auth = require('./middlewares')

// Register
router.post(
  '/register',
  auth.isEmailRegistered,
  auth.isHandleRegistered,
  auth.registerNewUser
)
// Login

// Get user profile

module.exports = router
