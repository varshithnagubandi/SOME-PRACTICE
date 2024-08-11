const http = require("http");
const myserver = http.createServer((request, response) => {
  response.write("SARANAM AYYAPPA");
  response.end();
});
myserver.listen(5500);
