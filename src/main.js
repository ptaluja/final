const serverless = require("serverless-http");
const express = require("express");
const app = express();
const path = require("path");

app.get("/.netlify/functions/main", function (req, res) {
  var options = {
    root: path.join(".netlify/functions/main/"),
  };
  console.log(options);

  var fileName = "index.html";
  res.sendFile(fileName, options);
});
module.exports.handler = serverless(app);
