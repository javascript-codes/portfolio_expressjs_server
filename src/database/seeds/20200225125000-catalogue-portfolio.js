const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    name: "Concepteur développeur d'applications",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    name: "Développeur web et web mobile",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    name: "Technicien d’assistance en informatique",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    name: "Technicien supérieur systèmes et réseaux",
    created_at: now,
    updated_at: now
  }
];
