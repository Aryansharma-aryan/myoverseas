const Consultation = require("../models/Consult");

// @desc   Submit consultation form
// @route  POST /api/consultation
// @access Public
const submitConsultation = async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !interest) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    // Create and save consultation entry
    const newEntry = new Consultation({ name, email, phone, interest, message });
    await newEntry.save();

    res.status(201).json({ message: "Consultation submitted successfully." });
  } catch (error) {
    console.error("Error submitting consultation:", error.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = { submitConsultation };
