const path = require("path");
import express from "express";
const app = express();
import { mongoconnection } from "./db";
mongoconnection();

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("public/index.html");
});

export default app;
