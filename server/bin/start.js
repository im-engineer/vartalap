"use strict";
require("@babel/polyfill");
require("@babel/register");
var config = require("../config/config");

const app = require("../app").default;
const { Server } = require("socket.io");
var http = require("http");

var configdata = config.get(process.env.Node_env);
var apiPort = configdata.api_port || 2345;
var server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(apiPort);

server.on("listening", () => {
  console.log("Server created successfully.listen port no:" + apiPort);
});
