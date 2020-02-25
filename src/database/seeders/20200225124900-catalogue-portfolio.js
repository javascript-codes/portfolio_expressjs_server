const cataloguePorfolios = require("../seeds/20200225125000-catalogue-portfolio");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("portfolio", cataloguePorfolios);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("portfolio", null, {});
  }
};
