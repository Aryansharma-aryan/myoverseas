const express = require("express");
const router = express.Router();
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// ✅ Load key directly from local file
const key = JSON.parse(process.env.GA_CREDENTIALS_JSON);

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

if (!PROPERTY_ID || !key) {
  throw new Error("GA4 credentials or property ID are missing.");
}

// ✅ Create GA4 Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: key.client_email,
    private_key: key.private_key,
  },
});

// Helper function
const getUserCount = async (startDate, endDate) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "activeUsers" }],
  });

  return response?.rows?.[0]?.metricValues?.[0]?.value || "0";
};

// Route
router.get("/", async (req, res) => {
  try {
    const [today, last7days, last30days] = await Promise.all([
      getUserCount("today", "today"),
      getUserCount("7daysAgo", "today"),
      getUserCount("30daysAgo", "today"),
    ]);

    res.json({ today, last7days, last30days });
  } catch (error) {
    console.error("❌ GA4 Error:", error);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

module.exports = router;
