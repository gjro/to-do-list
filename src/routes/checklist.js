const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", (req, res) => {
	console.log("Checklist");
	res.send();
});

router.post("/", (req, res) => {
	console.log(req.body);
	res.status(200).json(req.body);
});

router.get("/:id", (req, res) => {
	console.log(req.params.id);
	res.send(`ID: ${req.params.title}`);
});

router.put("/:id", (req, res) => {
	console.log(req.params.id);
	res.send(`ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
	console.log(req.params.id);
	res.send(`ID: ${req.params.id}`);
});

module.exports = router;
