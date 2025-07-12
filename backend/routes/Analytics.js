const express = require("express");
const router = express.Router();
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");

// Load GA Service Account JSON
const key = require(path.join(__dirname, "../google/analytics-key.json"));
const PROPERTY_ID = "467695887";

// Init GA Client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: key.client_email,
    private_key: key.private_key,
  },
});

const getUserCount = async (startDate, endDate) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "activeUsers" }],
  });

  return response?.rows?.[0]?.metricValues?.[0]?.value || "0";
};

// GET /api/analytics
router.get("/", async (req, res) => {
  try {
    const [today, last7days, last30days] = await Promise.all([
      getUserCount("today", "today"),
      getUserCount("7daysAgo", "today"),
      getUserCount("30daysAgo", "today"),
    ]);

    res.json({ today, last7days, last30days });
  } catch (error) {
    console.error("❌ GA4 Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

module.exports = router;
