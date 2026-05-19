const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } = process.env;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
  throw new Error("Missing required environment variables for authentication: ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET");
}

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
