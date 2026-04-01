const express = require("express");
const fs = require("fs"); // ✅ WAJIB
const path = require("path");

const router = express.Router();

// ✅ PATH ABSOLUTE (AMAN WINDOWS)
const filePath = path.resolve(__dirname, "../data/keywords.csv");

router.get("/", (req, res) => {
  // ✅ BACA CSV PAKAI filePath
  const keywords = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .slice(1) // skip header
    .filter(Boolean)
    .map((r) => r.split(",")[0]);

  const ideas = keywords.slice(0, 5).map((k) => ({
    keyword: k,
    ideas: [
      `Masalah umum tanpa ${k}`,
      `Cara kerja ${k}`,
      `Kenapa ${k} cocok untuk rumah & kos`,
    ],
  }));

  res.json(ideas);
});

module.exports = router;
