const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => res.json({ msg: "API Running" }));

app.listen(PORT, console.log(`Listening on port ${PORT}`));
