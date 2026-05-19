const mongoose = require("mongoose");

const clickLogSchema = new mongoose.Schema(
  {
    at: { type: Date, default: Date.now },
    path: { type: String, default: "/" },
    label: { type: String, default: "Unknown click" },
    element: { type: String, default: "unknown" },
  },
  { _id: false }
);

const visitSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  logs: [Date],
  clickCount: { type: Number, default: 0 },
  clickLogs: [clickLogSchema],
});

module.exports = mongoose.model("Visit", visitSchema);
