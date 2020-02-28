const express = require("express");
require("express-async-errors");

const { OK, CREATED } = require("../helpers/status_code");
const {getAllPortfolios,createPortfolio} =
  require("../controllers/portfolio_controller");
const portfolioRouter = express.Router();

portfolioRouter.get("/", async (request, response) => {
  try {
  response
    .status(OK)
    .json(await getAllPortfolios());
  }catch (e) {
    console.error(e);
  }
});

portfolioRouter.post("/", async (request, response) => {
  try {
    response
      .status(CREATED)
      .json(await createPortfolio(request.body));
  }catch (e) {
    console.error(e);
  }
});

module.exports = portfolioRouter;
