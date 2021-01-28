const { prisma } = require('.')

module.exports = async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: { handle: req.body.handle },
  })

  if (user) {
    req.isHandleRegistered = true
    next()
  } else {
    req.isHandleRegistered = false
    next()
  }
}
