const googleTrends = require("google-trends-api");

async function getRelatedQueries(keyword) {
  const res = await googleTrends.relatedQueries({
    keyword,
    geo: "ID",
    time: "today 3-m",
  });

  const data = JSON.parse(res);
  return data.default.rankedList[1]?.rankedKeyword || [];
}

module.exports = {
  getRelatedQueries,
};
