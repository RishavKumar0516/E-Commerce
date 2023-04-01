const express = require("express");
const hbs = require("hbs");
const path = require("path");


const router = express.Router();
const {Register, Login, UserRegister, UserLogin} = require("../controllers/auth");
const {verifyToken, verifyUser, checkuserislogged, verifyTokenForPages, Checkuserisvalidate} = require("../utils/verifyToken");
const {createProduct, updateProduct, deleteProduct, getProduct, getProductByname, getAllProduct, getProductByFields} = require("../controllers/product");



//post on login
router.post("/user/login", UserLogin);

//post on register
router.post("/user/register", UserRegister);

//show data based on fields(attribute of table)
router.get("/index/products/", getProductByFields);



//show home page
router.get("/index",checkuserislogged, (req, res)=>{

	res.render("user/index");
})

//show cart page
router.get("/index/cart",verifyToken, (req, res)=>{
	res.render("user/cart", {"username":req.detail.username});
})

//show like page
router.get("/index/like",verifyToken, (req, res)=>{
	res.render("user/like", {"username":req.detail.username});
})

//show product page to user
router.get("/index/showproducts", Checkuserisvalidate, (req, res)=>{
	res.render("user/productPage", {"username":req.detail.username});
})

//show single product 
router.get("/index/products/:id", Checkuserisvalidate, (req, res)=>{
	//console.log(req.detail);
	res.render("user/singleproduct",{"username":req.detail.username});
})


//show login page
router.get("/user/login", (req, res)=>{
	res.render("user/login");
})

//show register page
router.get("/user/register", (req, res)=>{
	res.render("user/register");
})

//logout user
router.get("/user/logout", (req, res)=>{
	res.clearCookie("access_token");
	  //req.session.user = {};
	  //console.log(req.session.user);
    res.redirect("/api/index");
})






module.exports = router;
