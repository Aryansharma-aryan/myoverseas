const express = require("express");
const moment = require("moment");
const Visit = require("../models/Visit");

const router = express.Router();

const getVisitStats = (doc) => {
  if (!doc) {
    return {
      visits: 0,
      last24h: 0,
      last7d: 0,
      last30d: 0,
      clicks: 0,
      clicks24h: 0,
      clicks7d: 0,
      clicks30d: 0,
    };
  }

  const logs = doc.logs || [];
  const clickLogs = doc.clickLogs || [];

  return {
    visits: doc.count || 0,
    last24h: logs.filter((d) => moment(d).isAfter(moment().subtract(24, "hours"))).length,
    last7d: logs.filter((d) => moment(d).isAfter(moment().subtract(7, "days"))).length,
    last30d: logs.filter((d) => moment(d).isAfter(moment().subtract(30, "days"))).length,
    clicks: doc.clickCount || 0,
    clicks24h: clickLogs.filter((item) => moment(item.at).isAfter(moment().subtract(24, "hours"))).length,
    clicks7d: clickLogs.filter((item) => moment(item.at).isAfter(moment().subtract(7, "days"))).length,
    clicks30d: clickLogs.filter((item) => moment(item.at).isAfter(moment().subtract(30, "days"))).length,
  };
};

router.get("/public-visit", async (req, res) => {
  try {
    const now = new Date();
    let doc = await Visit.findOne();

    if (!doc) {
      doc = await Visit.create({
        count: 1,
        logs: [now],
        clickCount: 0,
        clickLogs: [],
      });
    } else {
      doc.count = (doc.count || 0) + 1;
      doc.logs.push(now);

      if (doc.logs.length > 10000) {
        doc.logs = doc.logs.slice(-10000);
      }

      await doc.save();
    }

    res.json(getVisitStats(doc));
  } catch (error) {
    console.error("Visit route error:", error.message);
    res.status(500).json({ error: "Failed to update visit count" });
  }
});

router.get("/public-visit-count-only", async (req, res) => {
  try {
    const doc = await Visit.findOne();
    res.json(getVisitStats(doc));
  } catch (error) {
    console.error("Visit stats error:", error.message);
    res.status(500).json({ error: "Failed to fetch visit stats" });
  }
});

router.post("/track-click", async (req, res) => {
  try {
    const { path = "/", label = "Unknown click", element = "unknown" } = req.body || {};
    const now = new Date();
    let doc = await Visit.findOne();

    const clickLog = {
      at: now,
      path: String(path).slice(0, 200),
      label: String(label).slice(0, 160),
      element: String(element).slice(0, 40),
    };

    if (!doc) {
      doc = await Visit.create({
        count: 0,
        logs: [],
        clickCount: 1,
        clickLogs: [clickLog],
      });
    } else {
      doc.clickCount = (doc.clickCount || 0) + 1;
      doc.clickLogs.push(clickLog);

      if (doc.clickLogs.length > 5000) {
        doc.clickLogs = doc.clickLogs.slice(-5000);
      }

      await doc.save();
    }

    res.status(201).json(getVisitStats(doc));
  } catch (error) {
    console.error("Click tracking error:", error.message);
    res.status(500).json({ error: "Failed to track click" });
  }
});

module.exports = router;
