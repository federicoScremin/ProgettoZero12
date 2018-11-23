const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

// Configure port
const port = 8080;
// Connect to mongoDB database assuming our database name is "angular-app"
const mongoURL = 'mongodb://localhost/angular-app';
mongoose.connect(mongoURL, { useNewUrlParser: true });

//  Serve frontend view
app.use(express.static('public'));

// Specify backend route
router.get('/api', (request, response) => {
    response.status(200).send('Hello World!')
});
app.use(router);

// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);