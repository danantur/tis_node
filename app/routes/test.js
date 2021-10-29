const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/index.html"));
});

router.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/login.html"));
});

router.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/register.html"));
});

router.get("/profile", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/profile.html"));
});

module.exports = router;