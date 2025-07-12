const express = require("express");
const router = express.Router();
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

if (!PROPERTY_ID || !process.env.GA_CREDENTIALS_JSON) {
  throw new Error("GA4_PROPERTY_ID or GA_CREDENTIALS_JSON is missing in environment variables");
}

const credentials = JSON.parse(process.env.GA_CREDENTIALS_JSON);

const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

const getUserCount = async (startDate, endDate) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "activeUsers" }],
  });

  return response?.rows?.[0]?.metricValues?.[0]?.value || "0";
};

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
