const express = require("express");
const router = express.Router();
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// Step 1: Load env variables
const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const encodedCredentials = process.env.GA_CREDENTIALS_BASE64;

// Step 2: Check if env vars exist
if (!PROPERTY_ID || !encodedCredentials) {
  console.error("❌ Missing GA4_PROPERTY_ID or GA_CREDENTIALS_BASE64 in .env");
  throw new Error("GA4_PROPERTY_ID or GA_CREDENTIALS_BASE64 is missing in environment variables");
}

// Step 3: Decode base64 credentials
let credentials;
try {
  console.log("🔐 Decoding GA credentials...");
  const decoded = Buffer.from(encodedCredentials, "base64").toString("utf-8");
  credentials = JSON.parse(decoded);
  console.log("✅ Credentials decoded successfully.");
} catch (error) {
  console.error("❌ Failed to decode GA credentials:", error.message);
  throw new Error("Failed to decode GA credentials: " + error.message);
}

// Step 4: Initialize GA4 Analytics client
let analyticsDataClient;
try {
  console.log("📡 Initializing Google Analytics Data API client...");
  analyticsDataClient = new BetaAnalyticsDataClient({ credentials });
  console.log("✅ Analytics client initialized.");
} catch (error) {
  console.error("❌ Failed to initialize analytics client:", error.message);
  throw new Error("Analytics client init error: " + error.message);
}

// Step 5: Define function to get active users
const getUserCount = async (startDate, endDate) => {
  try {
    console.log(`📊 Fetching active users from ${startDate} to ${endDate}`);
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: "activeUsers" }],
    });

    const count = response?.rows?.[0]?.metricValues?.[0]?.value || "0";
    console.log(`✅ Active users (${startDate} to ${endDate}):`, count);
    return count;
  } catch (error) {
    console.error(`❌ Error fetching users from ${startDate} to ${endDate}:`, error.message);
    return "0";
  }
};

// Step 6: Define API endpoint
router.get("/analytics", async (req, res) => {
  try {
    console.log("⚙️ Starting analytics fetch...");
    const [today, last7days, last30days] = await Promise.all([
      getUserCount("today", "today"),
      getUserCount("7daysAgo", "today"),
      getUserCount("30daysAgo", "today"),
    ]);

    console.log("📦 Sending analytics response:", { today, last7days, last30days });
    res.json({ today, last7days, last30days });
  } catch (error) {
    console.error("❌ GA4 Error during /analytics:", error.stack || error.message || error);
    res.status(500).json({ error: "Failed to fetch analytics data", details: error.message });
  }
});

module.exports = router;
