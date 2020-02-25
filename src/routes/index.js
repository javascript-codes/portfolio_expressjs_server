const express = require("express");

const formationsRouter = require("./formations_router");
const promotionsRouter = require("./promotions_router");
const portfolioRouter = require("./portfolio_router");

const mainRouter = express.Router();

mainRouter.use("/formations", formationsRouter);
mainRouter.use("/promotions", promotionsRouter);
mainRouter.use("/portfolios", portfolioRouter);


module.exports = mainRouter;
