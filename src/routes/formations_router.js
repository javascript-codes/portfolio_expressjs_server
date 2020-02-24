const express = require("express");
require("express-async-errors");

const {
  recupererLesFormations
} = require("../controllers/formations_controller");

const { OK } = require("../helpers/status_code");

const formationsRouter = express.Router();

formationsRouter.get("/", async (request, response) => {
  const formations = await recupererLesFormations();

  response.status(OK);
  response.json(formations);
});

module.exports = formationsRouter;
