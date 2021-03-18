const { json } = require("body-parser");
const express = require("express");
const route = express.Router();
const StockMoudule = require("../model/stock");
// const fetchData = require("../middleware/fetchApi");
const fetch = require("node-fetch");


route.get("/", async (req, res) => {
  const stock = await StockMoudule.find();

  res.render("stock", { stock });
});

module.exports = route;
