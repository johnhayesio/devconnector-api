const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.use("/", (req, res) => res.json({ msg: "API Running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
