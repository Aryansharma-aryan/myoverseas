// 🌍 Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");

// 🛢️ MongoDB Connection
const connectDB = require("./db/db");
const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ CORS Configuration - Place BEFORE routes
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.vertexstudyvisa.com",
  "https://myoverseas.vercel.app",
  "https://myoverseas.onrender.com" // ✅ Add your backend domain too

];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Connect to MongoDB
connectDB();

// 🛣️ Routes
const Auth = require("./routes/Auth");
const consult = require("./routes/consultantRoutes");
const analyticsRoutes = require("./routes/Analytics");

app.use("/api", Auth);
app.use("/api", consult);
app.use("/api/analytics", analyticsRoutes); // ✅ moved after CORS setup

// 🔐 Google Analytics Integration (GA4)
const analyticsAuth = new google.auth.GoogleAuth({
  keyFile: path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  scopes: "https://www.googleapis.com/auth/analytics.readonly",
});

app.get("/api/analytics", async (req, res) => {
  try {
    const propertyId = process.env.GA4_PROPERTY_ID;
    if (!propertyId) throw new Error("GA4_PROPERTY_ID is not set in .env");

    const authClient = await analyticsAuth.getClient();
    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth: authClient,
    });

    const getActiveUsers = async (startDate, endDate) => {
      const result = await analyticsDataClient.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [{ startDate, endDate }],
          metrics: [{ name: "activeUsers" }],
        },
      });

      return result?.data?.rows?.[0]?.metricValues?.[0]?.value || "0";
    };

    const [today, last7days, last30days] = await Promise.all([
      getActiveUsers("today", "today"),
      getActiveUsers("7daysAgo", "today"),
      getActiveUsers("30daysAgo", "today"),
    ]);

    res.json({ today, last7days, last30days });
  } catch (error) {
    console.error("❌ GA4 API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
