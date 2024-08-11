const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const EmployeeRoute = require("./routes/EmployeeRoute");

const app = express();
const port = 5000;
dotenv.config();
app.use(bodyparser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log("ERROR IS : ", error);
  });

app.use("/employees", EmployeeRoute);

app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON PORT ${port}`);
});
