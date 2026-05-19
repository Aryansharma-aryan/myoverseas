const express = require("express");
const Consultation = require("../models/Consult");

const router = express.Router();
const { submitConsultation } = require("../controller/AuthController");
const verifyAdmin = require("../middleware/AuthMiddleware");

router.post("/consultants", submitConsultation);

// GET all consultants
router.get("/consultants", verifyAdmin, async (req, res) => {
  try {
    const consultants = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultants);
  } catch (error) {
    console.error("Error fetching consultants:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Mark consultation complete / undo complete
router.patch("/consultants/:id", verifyAdmin, async (req, res) => {
  try {
    const { completed } = req.body;

    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "completed must be true or false" });
    }

    const consultant = await Consultation.findByIdAndUpdate(
      req.params.id,
      { completed },
      { new: true, runValidators: true }
    );

    if (!consultant) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json(consultant);
  } catch (error) {
    console.error("Error updating consultant:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete consultation
router.delete("/consultants/:id", verifyAdmin, async (req, res) => {
  try {
    const consultant = await Consultation.findByIdAndDelete(req.params.id);

    if (!consultant) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json({ message: "Consultation deleted successfully" });
  } catch (error) {
    console.error("Error deleting consultant:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
