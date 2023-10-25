const express = require("express");
const router = express.Router();

const { getStories } = require("../controllers/stories");

router.get("/", getStories);

module.exports = router;
