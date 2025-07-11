const express = require("express");
const Consultation = require("../models/Consult");

const router = express.Router();
const { submitConsultation } = require("../controller/AuthController");

router.post("/consultants", submitConsultation);

// GET all consultants
router.get("/consultants", async (req, res) => {
  try {
    const consultants = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultants);
  } catch (error) {
    console.error("Error fetching consultants:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
