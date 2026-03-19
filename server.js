const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const TEAM_NAME = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

app.get("/api/info", (req, res) => {
  res.json({
    meeskond: TEAM_NAME
  });
});

app.get("/", (req, res) => {
  res.send("API töötab 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server töötab!");
});
