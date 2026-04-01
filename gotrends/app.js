const express = require("express");

const scrapeRoute = require("./routes/scrape");
const rankRoute = require("./routes/rank");
const ideasRoute = require("./routes/ideas");

const app = express();
app.use(express.json());

app.use("/scrape", scrapeRoute);
app.use("/rank", rankRoute);
app.use("/ideas", ideasRoute);

app.get("/", (req, res) => {
  res.send("✅ TikTok Trends Tool is running");
});

app.listen(3010, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
