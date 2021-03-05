const express = require("express");
const fetchUrl = require("fetch").fetchUrl;
const twit = require("./twit");

const app = express();

app.get("/", function (req, res) {
  res.send("fucking API");
});

twit.post(
  "statuses/update",
  { status: "hello world!" },
  function (err, data, response) {
    console.log(data);
  }
);

app.listen(3333);
