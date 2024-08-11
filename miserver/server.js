const express = require("express");
const app = express();

const varshith = (request, response, next) => {
  if (10 < 20) {
    next();
  }
};

const hardik = (request, response, next) => {
  if (10 > 20) {
    next();
  }
};

app.get("/varshith", varshith, (request, response) => {
  response.send("VARSHITH");
});

app.get("/hardik", hardik, (request, response) => {
  response.send("HARDIK");
});

const port = 5500;
app.listen(port, () => {
  console.log(`SERVER IS STARTED RUNNING ON PORT ${port}`);
});
