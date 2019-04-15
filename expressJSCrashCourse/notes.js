/*
Express is a fast / minimalist web framework for Node.js

Express is a 'server-side' or 'back-end' framework.
Can be used in combination with React to build full stack applications.


Used for Apps, API's, and Microservers



// BASIC SERVER SYNTAX

const express = require('express');

// Init express
const app = express();

// Create endpoints / route handlers

app.get('/', function(req, res) {
    res.send('hello world!');
});

// Listen on a port
app.listen(5000);


////////////

route handling:

app.get(), app.post(), app.put(), app.delete(), etc...

access to params, query strings, url parts, etc...

express has a router so we can store routes in separate files.

can parse incoming data with body parser.



app.get('/', function(req, res) {
    
    // fetch from database

    // load pages

    // return json

    // full access to request and response

});


Middleware functions:

functions that have access to the request and response objects.

Express has built in middleware but middleware also..
comes in 3rd part packages as well as custom middleware

1. execute any code
2. make changes to the request / response objects
3. end response cycle
4. call next middleware in the stack


// Set a static folder with..
app.use(express.static(path.join(__dirname, 'public')));



*/