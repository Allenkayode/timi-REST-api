const express = require("express");
const Config = require("./utils/config");
const { initMongo } = require("./config/db");
const { router } = require("./router");

initMongo();

app.use(express.json());
app.use(
  expressSession({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/', router );

const app = express();

app.listen(Config.Port, () => {
  console.log(`api running on ${Config.Port}`);
});
