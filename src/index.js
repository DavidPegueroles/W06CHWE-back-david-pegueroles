require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const databaseConnection = require("./database");
const app = require("./server");
const deployServer = require("./server/deployServer");

const port = process.env.PORT || 6254;
const robotsDatabase = process.env.ROBOTS_DB;

(async () => {
  try {
    await databaseConnection(robotsDatabase);
    await deployServer(port, app);
  } catch (error) {
    debug(chalk.bgRed.white(error.message));
  }
})();
