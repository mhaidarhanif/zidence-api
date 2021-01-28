const { prisma } = require('./')
module.exports = async (req, res) => {
  const users = await prisma.user.findMany({})

  res.json(users)
}