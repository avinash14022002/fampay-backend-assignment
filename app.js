const express = require("express");
const dataInfuser = require("./data-infuser");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

dataInfuser(); // call at start
setInterval(dataInfuser, 10 * 1000); // then call every 10 seconds

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
