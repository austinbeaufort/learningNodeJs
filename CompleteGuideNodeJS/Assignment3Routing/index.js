

const express = require('express');
const path = require('path');
const userRoutes = require('./routes/users');
const homeRoute = require('./routes/home');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(homeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT);