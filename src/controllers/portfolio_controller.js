const { Portfolio } = require("../models");

const PortfolioController = {
  getAll: async () => {
    const portfolios = await Portfolio.findAll({
      order: [["updatedAt", "DESC"]],
      attributes: [
        "name",
        "updatedAt"],
      raw: true
    });
    return portfolios;
  },
  get: async id => {
    const portfolio = await Portfolio.findByPk(id, {
      attributes: [
        "name",
        "updatedAt"],
      raw: true
    });

    return portfolio;
  }
};

module.exports = PortfolioController;
