const { PrismaClient } = require('@prisma/client')
exports.prisma = new PrismaClient()

module.exports = {
  authenticateUser: require('./authenticateUser'),
  // deauthenticateUser: require('./'),
  // getUserData: require('./'),
  // isAuthenticated: require('./'),
  // isTokenVerified: require('./'),
  isPasswordMatched: require('./isPasswordMatched'),
  isHandleRegistered: require('./isHandleRegistered'),
  registerNewUser: require('./registerNewUser'),
  // isApiKeyMatched: require('./'),
  isEmailRegistered: require('./isEmailRegistered'),
}
