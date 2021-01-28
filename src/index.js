const express = require('express')
const spdy = require('spdy')
const path = require('path')
const fs = require('fs')
const logger = require('morgan')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')

const app = express()
// Use global middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

// Get welcome message at home
app.get('/', async (req, res) => {
  res.json({
    message: 'Zidence API',
  })
})

// Other endpoints
app.use('/auth', authRouter)
app.use('/users', usersRouter)

// Create a new property listing
app.post(`/properties`, async (req, res) => {
  const { slug, name, description, userId } = req.body

  const result = await prisma.post.create({
    data: {
      slug,
      name,
      description,
      user: { connect: { email: userId } },
    },
  })

  res.json(result)
})

// Delete single property
app.delete(`/properties/:slug`, async (req, res) => {
  const { slug } = req.params

  const property = await prisma.post.delete({
    where: {
      slug: slug,
    },
  })

  res.json(property)
})

// Get single property
app.get(`/properties/:slug`, async (req, res) => {
  const { slug } = req.params

  const property = await prisma.post.findUnique({
    where: {
      slug: parseInt(slug),
    },
  })

  res.json(property)
})

// Get all properties
app.get('/properties', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { user: true },
  })

  res.json(posts)
})

const PORT = process.env.PORT || 4000

const options = {
  key: fs.readFileSync(__dirname + '/../server.key'),
  cert: fs.readFileSync(__dirname + '/../server.crt'),
}

spdy.createServer(options, app).listen(PORT, (error) => {
  if (error) {
    console.error(error)
    return process.exit(1)
  } else {
    console.log(`🚀 Zidence API :${PORT}`)
  }
})
