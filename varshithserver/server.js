const express = require("express");
const app = express();
const port = 5500;

app.get("/apple",(req,res)=>{
    res.send("SARANAM AYYAPPA")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
