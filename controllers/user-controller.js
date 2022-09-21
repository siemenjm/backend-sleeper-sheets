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

// USER SHOW ROUTE
router.get("/:userId", async (req, res) => {
	res.status(200).json({message: "user show route: " + req.params.userId});
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