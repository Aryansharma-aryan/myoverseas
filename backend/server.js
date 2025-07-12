const express = require("express");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");
require("dotenv").config();

const connectDB = require("./db/db");
const app = express();

// Connect to MongoDB
connectDB();

// ✅ CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.vertexstudyvisa.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// 🔐 Google Analytics Auth Setup
const analyticsAuth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "./google/analytics-key.json"),
  scopes: "https://www.googleapis.com/auth/analytics.readonly",
});

app.get("/api/analytics", async (req, res) => {
  try {
    const propertyId = process.env.GA4_PROPERTY_ID;
    if (!propertyId) {
      throw new Error("GA4_PROPERTY_ID is not set in .env");
    }

    const authClient = await analyticsAuth.getClient();
    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth: authClient,
    });

    const getReport = async (startDaysAgo) => {
      const response = await analyticsDataClient.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [
            {
              startDate: `${startDaysAgo}daysAgo`,
              endDate: "today",
            },
          ],
          metrics: [{ name: "activeUsers" }],
        },
      });

      return response?.data?.rows?.[0]?.metricValues?.[0]?.value || "0";
    };

    const [today, last7days, last30days] = await Promise.all([
      getReport(0),
      getReport(7),
      getReport(30),
    ]);

    res.json({ today, last7days, last30days });
  } catch (error) {
    console.error("❌ GA4 API Error:", error?.response?.data || error.message || error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
