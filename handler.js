const bodyParser = require("body-parser");
const express = require("express");
const hbs = require("hbs");
const serverless = require("serverless-http");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.status(200).render("index");
});

module.exports.awesomesauce= serverless(app);

var argv = require('minimist')(process.argv.slice(2));

console.log(argv);

if (argv['local']) {
  
  app.listen(5000);

}