const express = require("express");
const router = require("./router/router");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(2020);
    console.log("mongoDB connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });
