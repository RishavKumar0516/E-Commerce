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

router.get("/register", (req, res)=>{
    res.render("register");
});

router.get("/login", (req, res)=>{
	res.render("login");
});

router.get("/logout", verifyToken, (req, res)=>{
	res.clearCookie("access_token");
	  //req.session.user = {};
	  //console.log(req.session.user);
      console.log("logout successfully");
    res.redirect("/api/auth/login");
})

router.get("/admin",(req, res)=>{//we will use this in user section
	  console.log(req.detail);
    res.render("index");
});

router.get("/user/adminpage", checkadminislogged, (req, res)=>{
	const name = req.params.username;
    //console.log(name);
    //console.log(req.detail);
	//console.log(req.session.user);
	//res.render("index", {"username":name});
	res.redirect("/api/auth/login");
});



module.exports = router;