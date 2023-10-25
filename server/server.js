const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const storiesRoutes = require("./routes/stories");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/stories", storiesRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on port ${port}`));
