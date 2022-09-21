const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const { People, User } = require('../models');

///////////////////////////////
// ROUTES
////////////////////////////////

// USER INDEX ROUTE
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
    } catch(err) {
        res.status(400).json(err);
    }
});

// USER CREATE ROUTE
router.post("/", async (req, res) =>  {
    try {
        const createdUser = await User.create(req.body);
        res.json(createdUser);
    } catch(err) {
        res.status(400).json(err);
    }
});

// USER SHOW ROUTE
router.get("/:userId", async (req, res) => {
	try {
        const singleUser = await User.findById(req.params.userId);
        res.json(singleUser);
    } catch(err) {
        res.status(400).json(err);
    }
});

// USER DELETE ROUTE
router.delete("/:userId", async (req, res) => {
	res.status(200).json({message: "user delete route: " + req.params.userId});
});

// USER UPDATE ROUTE
router.put("/:userId", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "user update route: " + req.params.userId});
});

module.exports = router;