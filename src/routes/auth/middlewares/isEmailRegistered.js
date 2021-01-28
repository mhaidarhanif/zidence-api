const { prisma } = require('./')
module.exports = async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  })

  if (user) {
    req.isEmailRegistered = true
    next()
  } else {
    req.isEmailRegistered = false
    next()
  }
}
