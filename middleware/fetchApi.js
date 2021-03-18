const { json } = require("body-parser");
const fetch = require("node-fetch");

function fetchAPi(req, res, next) {
  fetch("https://api.github.com/users/github").then((res) => res.json());
}
module.exports = fetchAPi;
