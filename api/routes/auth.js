const express = require("express");
const hbs = require("hbs");
const path = require("path");
const User = require("../models/User");

const router = express.Router();
const {verifyToken, verifyUser, verifyAdmin, checkadminislogged, Checkuserisvalidate} = require("../utils/verifyToken");



const {Register, Login} = require("../controllers/auth");

router.post("/register", Register);
router.post("/login", Login);

//this checks the user is valid or not, if valid return username else return empty string, in place of username.
router.get("/checkuserisvalidate", Checkuserisvalidate, (req, res)=>{
	// console.log(req.user);
	res.status(200).json({username:req.detail.username})
})


module.exports = router;