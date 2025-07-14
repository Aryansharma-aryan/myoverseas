const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  count: { type: Number, default: 1 },
  logs: [Date], // Add this to store visit timestamps
});

module.exports = mongoose.model("Visit", visitSchema);
