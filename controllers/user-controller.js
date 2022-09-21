const express = require('express');
const router = express.Router();

///////////////////////////////
// ROUTES
////////////////////////////////

// USER INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "user index route"});
});

// USER CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "user create route"});
});

module.exports = router;