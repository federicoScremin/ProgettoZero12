const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const router = express.Router();

// Configure port
const port = 8080;

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//  Serve frontend view
app.use(express.static('public'));

/*
// Specify backend route
router.get('/api', (request, response) => {
    response.status(200).send('Hello World!')
});
app.use(router);
*/

// Require Temperature routes
require('./app/routes/temperature.routes.js')(app);

// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);