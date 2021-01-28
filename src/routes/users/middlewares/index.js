const { PrismaClient } = require('@prisma/client')
exports.prisma = new PrismaClient()

module.exports={
  getAll: require('./getAll')
}