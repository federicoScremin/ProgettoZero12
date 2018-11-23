const Temperature = require('../models/temperature.model.js');

// Create and Save a new Temperature
exports.create = (req, res) => {

};

// Retrieve and return all temperatures from the database.
exports.findAll = (req, res) => {
	Temperature.find()
    .then(temperatures => {
        res.send(temperatures);
        console.log(temperatures)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving temperatures."
        });
    });
};

// Find a single Temperature with a Temperature's ID
exports.findOne = (req, res) => {

};

// Update a Temperature identified by the Temperature's ID in the request
exports.update = (req, res) => {

};

// Delete a Temperature with the specified Temperature's ID in the request
exports.delete = (req, res) => {

};