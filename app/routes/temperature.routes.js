module.exports = (app) => {
    const temperatures = require('../controllers/temperature.controller.js');

    // Retrieve all Temperatures
    app.get('/temperatures', temperatures.findAll);

    // Create a new Temperature
    app.post('/notes', temperatures.create);

    // Retrieve a single Temperature with temperature's ID
    app.get('/notes/:noteId', temperatures.findOne);

    // Update a Temperature with temperature's ID
    app.put('/notes/:noteId', temperatures.update);

    // Delete a Temperature with temperature's ID
    app.delete('/notes/:noteId', temperatures.delete);
    
}