import mongoose from "mongoose";

import "dotenv/config";
var config = require("./config/config");

var configdata = config.get(process.env.Node_env).db;
var mongoUrl = `mongodb://${configdata.host}:${configdata.port}/${configdata.databaseName}`;
var options = {
  user: configdata.userName,
  pass: configdata.password,
};
export const mongoconnection = async () => {
  try {
    await mongoose.connect(mongoUrl, options);
    console.log("Connect to DB");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
