const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  const payload = {
    id: req.userData.id,
  }
  const jwtSecret = process.env.JWT_SECRET_KEY

  const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: '24h' })

  res.status(200).json({
    message: 'Authentication successful',
    data: { accessToken: accessToken },
  })
}
