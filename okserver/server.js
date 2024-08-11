const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const EmployeeRoutes = require("./routes/EmployeeRoutes");
const app = express();

const port = 5500;
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

app.use("/employees", EmployeeRoutes);

app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON PORT ${port}`);
});
