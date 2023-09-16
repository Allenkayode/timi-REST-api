const express = require("express");
const app = express();
const Config = require("./utils/config");
const { initMongo } = require("./config/db");
const { routes } = require("./routes/personRoute");

initMongo();
app.use(express.json());

app.use("/",routes);



app.listen(Config.Port, () => {
  console.log(`api running on ${Config.Port}`);
});
