const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;

dotenv.config();

MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY ...");
  })
  .catch((error) => {
    console.log("ERROR IS : ", error);
  });

app.get("/varshith", (request, response) => {
  response.send("VARSHITH NAGUBANDI");
});

app.get("/hardik", (request, response) => {
  response.send("HARDIK NAGUBANDI");
});

app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON PORT ${port}`);
});
