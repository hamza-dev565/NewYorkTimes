const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 900 });

exports.getStories = async (req, res) => {
  try {
    const type = req.query.type;

    const cachedStories = cache.get(type);

    if (cachedStories) {
      return res.json(cachedStories);
    }

    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${process.env.API_KEY}`);
    const stories = response.data.results;

    cache.set(type, stories);

    res.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error.message);
    if (error.response && error.response.status === 429) {
      res.status(429).json({ message: "Too many requests. Please try again later." });
    } else {
      res.status(500).json({ message: "Failed to fetch stories", error });
    }
  }
};
