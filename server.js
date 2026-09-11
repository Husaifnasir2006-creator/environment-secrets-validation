require("dotenv").config();

const express = require("express");

const app = express();

const requiredEnv = ["PORT", "JWT_SECRET", "DATABASE_URL"];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    process.exit(1);
  }
}

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Environment variables are working!",
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
