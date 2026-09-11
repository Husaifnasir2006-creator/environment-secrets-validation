# Environment Secrets Validation

This project demonstrates how to move application secrets into environment variables and validate that required values are available before starting an Express server.

## Features

* Uses `.env` for application secrets and configuration.
* Uses `dotenv` to load environment variables.
* Validates required environment variables.
* Stops the server if a required variable is missing.
* Keeps `.env` and `node_modules` out of GitHub using `.gitignore`.

## Environment Variables

```env
PORT=3000
JWT_SECRET=my_super_secret_key
DATABASE_URL=my_database_url
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server runs on:

```text
http://localhost:3000
```

## Validation

The application checks for:

* `PORT`
* `JWT_SECRET`
* `DATABASE_URL`

If any required environment variable is missing, the application displays an error and stops.

## Technologies

* Node.js
* Express.js
* dotenv
* JavaScript
