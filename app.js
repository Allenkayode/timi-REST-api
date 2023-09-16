const express = require("express");
const app = express();
const Config = require("./utils/config");
const { initMongo } = require("./config/db");
const { route } = require("./routes/PersonRoute");

initMongo();
app.use(express.json());

app.use(route);



app.listen(Config.Port, () => {
  console.log(`api running on ${Config.Port}`);
});
