const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");

const filePath = path.resolve(__dirname, "../data/keywords.csv");

function writeKeywordsCSV(rows) {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: "keyword", title: "KEYWORD" },
      { id: "seed", title: "SEED" },
      { id: "growth", title: "GROWTH_SCORE" },
    ],
  });

  return csvWriter.writeRecords(rows);
}

module.exports = { writeKeywordsCSV };
