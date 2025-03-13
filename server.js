// Express server handler
const express = require('express');
const app = express();

// Set hidden values in .env
require('dotenv').config();
const PORT = process.env.PORT || 8080;

// Routes functions
const routes = require('./Functions/Routes');

// Routes handler
app.get( '/', routes.login);

// Start server
app.listen((PORT), () => {
    console.log(`Server listening in port ${PORT}`);
})