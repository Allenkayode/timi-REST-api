const dote = require("dotenv");
dote.config();

const Config = {
  MONGO_URL: process.env.MONGO_URL,
  Port:process.env.PORT
 
};

module.exports = Config;