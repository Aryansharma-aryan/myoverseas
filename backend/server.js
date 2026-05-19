const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");

const Auth = require("./routes/Auth");
const consult = require("./routes/consultantRoutes");
const analyticsRoutes = require("./routes/Analytics");
const visitRoutes = require("./routes/visitCounter");


const app = express();
app.use(express.json());

// ✅ CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.vertexstudyvisa.com",
  "https://myoverseas.vercel.app",
  "https://myoverseas.onrender.com"
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

// ✅ MongoDB Connection
connectDB();

// ✅ Routes
app.use("/api", Auth);
app.use("/api", consult);

if (process.env.GA4_PROPERTY_ID && process.env.GA_CREDENTIALS_BASE64) {
  app.use("/api", analyticsRoutes);
} else {
  console.warn("⚠️ Analytics route disabled: GA env vars are not configured.");
}

app.use("/api", visitRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
