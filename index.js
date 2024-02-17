const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { responSeccess } = require("./utils/message");
const PORT = process.env.PORT || 3444;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/hallo', (req, res)=>{
    responSeccess(200, null, "hallo bro", res)
})

app.listen(PORT, () => {
  console.log(`running in localhost:${PORT}`);
});
