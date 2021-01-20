const express = require('express')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

// Get welcome message
app.get('/', async (req, res) => {
  res.json({
    message: 'Zidence API',
  })
})

// Get all users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({})

  res.json(users)
})

// Register a new user
app.post(`/auth/register`, async (req, res) => {
  const { email, handle, name, password } = req.body

  const result = await prisma.user.create({
    data: {
      email,
      handle,
      name,
      password,
    },
  })

  res.json(result)
})

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

const server = app.listen(PORT, () => {
  console.log(`🚀 Zidence API :${PORT}`)
})
