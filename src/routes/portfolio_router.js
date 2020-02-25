const express = require("express");
require("express-async-errors");

const {
  getAll
} = require("../controllers/portfolio_controller");

const { OK } = require("../helpers/status_code");

const portfolioRouter = express.Router();

portfolioRouter.get("/", async (request, response) => {
  const portfolios = await getAll();
  console.log(portfolios);

  response.status(OK);
  response.json(portfolios);
});

module.exports = portfolioRouter;
