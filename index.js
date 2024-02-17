const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { route } = require("./routes");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3444;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(route)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`running in localhost:${PORT}`);
  });
})
