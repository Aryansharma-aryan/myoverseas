const express = require("express");
const cors = require("cors");
const path = require("path");
const prerender = require("prerender-node");
const favicon = require("serve-favicon");

const connectDB = require("./db/db");
const adminRoutes = require("./routes/consultantRoutes.js");
const consultationRoutes = require("./routes/Auth.js");
const Auth = require("./routes/Auth.js");

connectDB();

const app = express();

// ✅ Serve favicon (logo) from React build
app.use(favicon(path.join(__dirname, "../frontend/build/favicon.ico")));

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://www.vertexstudyvisa.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true
}));

app.use(express.json());

// ✅ Prerender for SEO
app.use(prerender.set("prerenderToken", "vmfW4uQpBGLBlxw4fQcQ"));

// ✅ API Routes
app.use("/api", adminRoutes);
app.use("/api/admin", consultationRoutes);
app.use("/api", Auth);

// ✅ Serve static React build files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// ✅ Serve Google verification file BEFORE React fallback
app.get("/google838fa3b5432d43e5.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/google838fa3b5432d43e5.html"));
});

// ✅ React SPA fallback for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
