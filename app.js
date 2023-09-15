const express = require("express");
const Config = require("./utils/config");
const { initMongo } = require("./config/db");
const { route } = require("./routes/PersonRoute");

initMongo();

app.use(express.json());
app.use(
  expressSession({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", route);

const app = express();

app.listen(Config.Port, () => {
  console.log(`api running on ${Config.Port}`);
});
