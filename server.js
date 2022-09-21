///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
require('./config/db.connection');

const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const { PORT } = process.env;

const authController = require('./controllers/auth-controller');
// const usersController = require('./controllers/user-controller');

const app = express();

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', authController);
// app.use('/users', usersController);

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
