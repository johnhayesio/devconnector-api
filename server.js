const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");
const config = require("config");
const app = express();

// Connect Database
connectDB();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

if (config.get("nodeEnv") === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.json({ msg: "API Running" }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${config.get("nodeEnv")} mode on port ${PORT}`)
);

// Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
