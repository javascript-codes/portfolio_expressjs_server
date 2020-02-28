const {Portfolio} = require("../models");

const PortfolioController = {
  getAllPortfolios: async () => {
    return Portfolio.findAll({
      order: [["updatedAt", "DESC"]],
      attributes: [
        "name",
        "updatedAt"
      ],
      raw: true
    });
  },
  getPortfolio: async id => {
    return Portfolio.findByPk(id, {
      attributes: [
        "name",
        "updatedAt"
      ],
      raw: true
    });
  },
  createPortfolio: async data => {
    try {
      return Portfolio.create(data);
    } catch (e) {
      console.error(e);
    }
  }
};

module.exports = PortfolioController;
