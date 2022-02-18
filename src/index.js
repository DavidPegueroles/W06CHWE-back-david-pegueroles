require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const deployServer = require("./server");

const port = process.env.SERVER_PORT || 6254;

(async () => {
  try {
    await deployServer(port);
  } catch (error) {
    debug(chalk.bgRed.white(error.message));
  }
})();
