const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    interest: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consultation", consultationSchema);
