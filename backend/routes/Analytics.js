const express = require("express");
const moment = require("moment");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const Visit = require("../models/Visit");

const router = express.Router();

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const encodedCredentials = process.env.GA_CREDENTIALS_BASE64;
const analyticsEnabled = Boolean(PROPERTY_ID && encodedCredentials);

let analyticsDataClient = null;

if (analyticsEnabled) {
  try {
    const decoded = Buffer.from(encodedCredentials, "base64").toString("utf-8");
    const credentials = JSON.parse(decoded);
    analyticsDataClient = new BetaAnalyticsDataClient({ credentials });
    console.log("Google Analytics client initialized.");
  } catch (error) {
    console.error("Failed to initialize Google Analytics:", error.message);
    analyticsDataClient = null;
  }
} else {
  console.warn("Google Analytics env vars missing. Using website visitor fallback.");
}

const countRecent = (items, dateField, amount, unit) =>
  items.filter((item) => {
    const value = dateField ? item?.[dateField] : item;
    return moment(value).isAfter(moment().subtract(amount, unit));
  }).length;

const getWebsiteAnalytics = async () => {
  const doc = await Visit.findOne();
  const logs = doc?.logs || [];
  const clickLogs = doc?.clickLogs || [];

  return {
    today: countRecent(logs, null, 24, "hours"),
    last7days: countRecent(logs, null, 7, "days"),
    last30days: countRecent(logs, null, 30, "days"),
    totalVisitors: doc?.count || 0,
    clicks: doc?.clickCount || 0,
    clicks24h: countRecent(clickLogs, "at", 24, "hours"),
    clicks7d: countRecent(clickLogs, "at", 7, "days"),
    clicks30d: countRecent(clickLogs, "at", 30, "days"),
    source: "website",
  };
};

const getGoogleUserCount = async (startDate, endDate) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: "activeUsers" }],
  });

  return Number(response?.rows?.[0]?.metricValues?.[0]?.value || 0);
};

router.get("/analytics", async (req, res) => {
  if (!analyticsEnabled || !analyticsDataClient) {
    try {
      return res.json(await getWebsiteAnalytics());
    } catch (error) {
      console.error("Website analytics fallback error:", error.message);
      return res.status(500).json({ error: "Failed to fetch website analytics" });
    }
  }

  try {
    const [today, last7days, last30days, websiteStats] = await Promise.all([
      getGoogleUserCount("today", "today"),
      getGoogleUserCount("7daysAgo", "today"),
      getGoogleUserCount("30daysAgo", "today"),
      getWebsiteAnalytics(),
    ]);

    res.json({
      ...websiteStats,
      today,
      last7days,
      last30days,
      source: "google",
    });
  } catch (error) {
    console.error("Google Analytics error, using website fallback:", error.message);
    try {
      res.json(await getWebsiteAnalytics());
    } catch (fallbackError) {
      res.status(500).json({ error: "Failed to fetch analytics data" });
    }
  }
});

module.exports = router;
