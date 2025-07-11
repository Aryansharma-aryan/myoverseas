const express = require("express");
const cors = require("cors");

const connectDB = require("./db/db");
const adminRoutes = require("./routes/consultantRoutes.js");
const consultationRoutes = require("./routes/Auth.js");
const Auth = require("./routes/Auth.js");

connectDB();

const app = express();

// ✅ Allow multiple origins (local + vercel)
const allowedOrigins = [
  "http://localhost:3000",
  "https://myoverseas.vercel.app/"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow no-origin requests like Postman
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use("/api", adminRoutes);
app.use("/api/admin", consultationRoutes);
app.use("/api", Auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
