const { prisma } = require('.')
const bcrypt = require('bcrypt')
module.exports = async (req, res) => {
  const { email, handle, name, password } = req.body

  if (req.isEmailRegistered) {
    req
      .status(409)
      .json({ message: 'Email is already registered', data: { email: email } })
  } else if (req.isHandleRegistered) {
    req.status(409).json({
      message: 'This Username is already taken',
      data: { username: handle },
    })
  } else {
    const saltRounds = 11
    const hash = await bcrypt.hash(password, saltRounds)

    const newUser = await prisma.user.create({
      data: {
        email,
        handle,
        name,
        hash,
      },
      select: { email: true, handle: true, name: true },
    })

    res
      .status(200)
      .json({ message: 'User is successfully registered', data: newUser })
  }
}
