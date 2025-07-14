const express = require("express");
const Visit = require("../models/Visit");
const moment = require("moment");

const router = express.Router();

// This route increases count and logs visit
router.get("/public-visit", async (req, res) => {
  try {
    let doc = await Visit.findOne();
    const now = new Date();

    if (!doc) {
      doc = await Visit.create({
        count: 1,
        logs: [now]
      });
    } else {
      doc.count += 1;
      doc.logs.push(now);
      await doc.save();
    }

    const last24h = doc.logs.filter(d => moment(d).isAfter(moment().subtract(24, 'hours'))).length;
    const last7d = doc.logs.filter(d => moment(d).isAfter(moment().subtract(7, 'days'))).length;
    const last30d = doc.logs.filter(d => moment(d).isAfter(moment().subtract(30, 'days'))).length;

    res.json({
      visits: doc.count,
      last24h,
      last7d,
      last30d,
    });
  } catch (error) {
    console.error("❌ Visit route error:", error.message);
    res.status(500).json({ error: "Failed to update visit count" });
  }
});

// This route only fetches stats (no increment)
router.get("/public-visit-count-only", async (req, res) => {
  try {
    const doc = await Visit.findOne();
    if (!doc) {
      return res.json({ visits: 0, last24h: 0, last7d: 0, last30d: 0 });
    }

    const last24h = doc.logs.filter(d => moment(d).isAfter(moment().subtract(24, 'hours'))).length;
    const last7d = doc.logs.filter(d => moment(d).isAfter(moment().subtract(7, 'days'))).length;
    const last30d = doc.logs.filter(d => moment(d).isAfter(moment().subtract(30, 'days'))).length;

    res.json({
      visits: doc.count,
      last24h,
      last7d,
      last30d,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch visit stats" });
  }
});

module.exports = router;
