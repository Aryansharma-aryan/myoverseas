// routes/Admin.js
const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consult");

// Middleware
const verifyAdmin = require("../middleware/AuthMiddleware");

// GET all consultations - admin only
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const data = await Consultation.find().sort({ createdAt: -1 });
    res.json(data);
      console.log("Admin endpoint hit",data);

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
