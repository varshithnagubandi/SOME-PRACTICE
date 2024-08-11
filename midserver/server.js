const express = require("express");
const app = express();

const varshith = (request, response, next) => {
  if (false) {
    next();
  }
};

app.get("/varshith", varshith, (resquest, response) => {
  response.send("VARSHITH NAGUBANDI");
});

app.use((request, response, next) => {
  if (10 < 20) {
    next();
  }
});

app.get("/hardik", (request, response) => {
  response.send("HARDIK NAGUBANDI");
});

const port = 5500;
app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON PORT ${port}`);
});
