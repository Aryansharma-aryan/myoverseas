const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Replace with strong credentials in real projects
const ADMIN_EMAIL = "gsgb5555@gmail.com";
const ADMIN_PASSWORD = "123456";
const JWT_SECRET = "gurbazzsir1234"; // In real-world, keep in .env

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
