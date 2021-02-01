const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  if (!req.isEmailRegistered) {
    res.status(400).json({
      message: 'Email is not registered yet',
      error: '400 Bad Request',
    })
  } else {
    const { hash } = req.userData
    const { password } = req.body
    const result = await bcrypt.compare(password, hash)

    if (result) {
      next()
    } else {
      res
        .status(401)
        .json({ message: 'Wrong password!', error: '401 Unauthorized request' })
    }
  }
}
