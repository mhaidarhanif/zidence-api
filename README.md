# Zidence API

Zidence is a simple property listing application. This repo is the backend API part with Node.js tooling ecosystem.

- Node.js
- Express
- Prisma
- PostgreSQL

---

## Getting Started

### Install dependencies

```sh
yarn
```

### Migrate database

```sh
yarn migrate
# prisma migrate dev --preview-feature
```

### Reset database migration

```sh
yarn migrate:reset
# prisma migrate reset --preview-feature
```

### Generate Prisma client

```sh
yarn generate
# prisma generate
```

### Run development server

```sh
yarn dev
# nodemon src/index.js
```

Open `http://localhost:4000`

### Run production server

```sh
yarn start
# node src/index.js
```

Open `http://localhost:4000`

---

## Deployment

### Migrate database for production

```sh
yarn migrate:deploy
# prisma migrate deploy --preview-feature
```

---

## REST API Documentation

You can access the REST API of the server using the following endpoints:

### `GET`

- `/users`: Get all users
- `/properties`: Get all properties
- `/properties/:slug`: Get a single property by its `slug`

### `POST`

- `/auth/register`: Register a new user
  - Body:
    - `email: String` (required): The email address of the user
    - `handle: String` (required): The handle/username of the user
    - `name: String` (required): The name of the user
    - `passwrod: String` (required): The password of the user
- `/properties`: Create a new property
  - Body:
    - `name: String` (required): The name of the property
    - `slug: String` (required): The slug of the property
    - `description: String` (optional): The description of the property
    - `userId: String` (required): The `id` of the user that creates the property

### `DELETE`

- `/property/:slug`: Delete a property by its `slug`
