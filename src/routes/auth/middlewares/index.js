const { PrismaClient } = require('@prisma/client')
exports.prisma = new PrismaClient()

module.exports = {
  // authenticateUser: require('./'),
  // deauthenticateUser: require('./'),
  // getUserData: require('./'),
  // isAuthenticated: require('./'),
  // isTokenVerified: require('./'),
  // isPasswordMatched: require('./'),
  isHandleRegistered: require('./isHandleRegistered'),
  registerNewUser: require('./registerNewUser'),
  // isApiKeyMatched: require('./'),
  isEmailRegistered: require('./isEmailRegistered'),
}
