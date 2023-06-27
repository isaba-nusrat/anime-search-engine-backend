const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const crypto = require("crypto");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const secretKey =
  process.env.SECRET_KEY || crypto.randomBytes(64).toString("hex");

const users = [{ username: "isa", password: "123" }];

app.use(express.json());
app.use(cors());

app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ error: "Username already exists" });
  }

  const newUser = { username, password: password };
  users.push(newUser);

  const token = jwt.sign({ username }, secretKey);

  res.status(201).json({ message: "User created successfully", token });
});

app.post("/api/signin", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  if (password !== user.password) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign({ username }, secretKey);

  res.json({ message: "Sign in successful", token, user: user.username });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
