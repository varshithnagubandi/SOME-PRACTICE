/*
const fs = require("fs");
fs.readFile("content.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
*/

/*
const fs = require("fs");
fs.writeFile("varshith.html", "utf8", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("File Created Successfully");
});
*/

/*
const fs = require("fs");
const input = "My name is Nagubandi Veera Venkata Varshith";
fs.writeFile("varshith.html", input, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Content Successfully Updated in file");
});
*/

/*
const fs = require("fs");
const content = "Saranam Ayyappa";
fs.writeFile("varshith.html", content, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Content Successfully Updated");
});
*/

/*
const fs = require("fs");
fs.rename("varshith.html", "varshith100.js", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("File name changed Successfully");
});
*/

const fs = require("fs");
fs.unlink("varshith100.js", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("File Deleted Successfully");
});
