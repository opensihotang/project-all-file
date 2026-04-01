const express = require("express");
const { getRelatedQueries } = require("../services/googleTrends");
const { writeKeywordsCSV } = require("../utils/csv");

const router = express.Router();

const seeds = ["makeup", "eyeliner", "lipstick"];

router.get("/", async (req, res) => {
  let rows = [];

  for (const seed of seeds) {
    const results = await getRelatedQueries(seed);

    results.slice(0, 5).forEach((r) => {
      rows.push({
        keyword: r.query,
        seed,
        growth: r.value,
      });
    });

    await new Promise((r) => setTimeout(r, 1500));
  }

  await writeKeywordsCSV(rows);
  res.json({ message: "✅ Scraping selesai", total: rows.length });
});

module.exports = router;
