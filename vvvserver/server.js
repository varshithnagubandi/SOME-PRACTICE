const express = require("express");
const app = express();
const port = 5500;

app.get("/varshith", (request, response) => {
  response.send("SARANAM AYYAPPA");
  response.end();
});
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port} `);
});
