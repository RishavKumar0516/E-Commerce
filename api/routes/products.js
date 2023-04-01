const express = require("express");

const router = express.Router();

const {createProduct, updateProduct, deleteProduct, getProduct, getProductByname, getAllProduct} = require("../controllers/product");
const {verifyAdmin, verifyToken} = require("../utils/verifyToken");

// this route is for api, We fetch the information by doing fetch request on this routes
//create
router.post("/create", verifyAdmin, createProduct);

//update
router.put("/update/:id", verifyAdmin, updateProduct);

//Delete
router.delete("/delete/:id", verifyAdmin, deleteProduct);

//Get Product
router.get("/find/:id", getProduct);

//Get all Products
router.get("/",verifyToken, getAllProduct);



//this are the routes used to show the webpages
//for admin
router.get("/adminproducts",verifyToken, (req, res)=>{
	res.status(201).render("show_Products", {"username":req.detail.username});
});


router.get("/error404", (req, res)=>{
	res.status(201).render("404");
});


router.get("/create",verifyToken,verifyAdmin,  (req, res, err)=>{
	//console.log(req.detail);
	//console.log("hi")
	res.status(201).render("createProduct", {"username":req.detail.username});
});


router.get("/delete",verifyToken, verifyAdmin, (req, res)=>{
	res.status(201).render("deleteProduct", {"username":req.detail.username});
});

router.get("/update/:id", verifyToken, verifyAdmin, (req, res)=>{
	res.status(201).render("updateProduct", {"username":req.detail.username});
});








module.exports = router;
