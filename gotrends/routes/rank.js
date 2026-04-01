const express = require("express");
const fs = require("fs"); // ✅ WAJIB
const path = require("path");

const router = express.Router();

// ✅ PATH ABSOLUTE
const filePath = path.resolve(__dirname, "../data/keywords.csv");

router.get("/", (req, res) => {
  const rows = fs
    .readFileSync(filePath, "utf8") // ✅ PAKAI filePath
    .split("\n")
    .slice(1)
    .filter(Boolean)
    .map((r) => {
      const [keyword, seed, growth] = r.split(",");
      return {
        keyword,
        seed,
        growth: Number(growth),
      };
    });

  const ranked = rows
    .map((k) => ({
      ...k,
      score:
        (k.keyword.split(" ").length >= 2 ? 30 : 0) +
        (k.growth > 5000 ? 50 : 20),
    }))
    .sort((a, b) => b.score - a.score);

  res.json(ranked.slice(0, 10));
});

module.exports = router;
