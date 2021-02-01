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
router.post(
  '/login',
  auth.isEmailRegistered,
  auth.isPasswordMatched,
  auth.authenticateUser
)
// Get user profile

module.exports = router
