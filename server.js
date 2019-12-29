const express = require("express");
const app = express();

app.use("/", (req, res) => res.json({ msg: "API Running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
