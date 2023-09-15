const express = require("express");
const router = express();

const {
  createPerson,
  getAllPersons,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controller/person");
//Person route
// Create a new person
router.post("/api", createPerson);

// Read all
router.get("/api", getAllPersons);

// Read details of a person by _id or name
router.get("/api/:idOrName", getPerson);

// Update details of an existing person by _id or name
router.put("/api/:idOrName", updatePerson);

// Delete a person by _id or name
router.delete("/api/:idOrName", deletePerson);

module.exports = router;
