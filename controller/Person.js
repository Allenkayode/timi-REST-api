const mongoose = require("mongoose");
const Person = require("../model/Person");

// Create a new person
const createPerson = async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.json(person);
  } catch (error) {
    console.log(error.message);
    res.json({ error: "Failed to create a person" });
  }
};
// Get all persons
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status.json(persons);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get person by query ( either user_id by or name)
const getPerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, search by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, search by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOne(query);
    if (!person) {
      return req.json({ error: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update  existing person by _id or name
const updatePerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, update by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, update by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOneAndUpdate(query, req.body, {
      new: true,
    });
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    res.json({ error: "Server error" });
  }
};
// Delete  person by _id or name
const deletePerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, delete by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, delete by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOneAndDelete(query);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json({ message: "Person deleted successfully" });
  } catch (error) {
    res.json({ error: "Server error" });
  }
};
module.exports = {
  createPerson,
  getAllPersons,
  getPerson,
  updatePerson,
  deletePerson,
};
