///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
require('./config/db.connection');

// import express
const express = require("express");

// create application object
const app = express();

const usersController = require('./controllers/user-controller');

const cors = require('cors');
const morgan = require('morgan');

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/users', usersController);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));