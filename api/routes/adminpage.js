const express = require("express");
const hbs = require("hbs");
const path = require("path");

const router = express.Router();
const {Register, Login} = require("../controllers/auth");
const {verifyToken, verifyAdmin, verifyUser,checkadminislogged, checkuserislogged, verifyTokenForPages, Checkuserisvalidate} = require("../utils/verifyToken");
const {createProduct, updateProduct, deleteProduct, getProduct, getProductByname, getAllProduct, getProductByFields} = require("../controllers/product");


//register admin
router.get("/register", (req, res)=>{
    res.render("admin/register");
});

//login admin
router.get("/login", (req, res)=>{
	res.render("admin/login");
});

//logout admin
router.get("/logout", verifyToken, (req, res)=>{
	res.clearCookie("access_token");
	  //req.session.user = {};
	  //console.log(req.session.user);
      console.log("logout successfully");
    res.redirect("/api/admin/login");
})

//admin index page
// router.get("/",(req, res)=>{//we will use this in user section
// 	  console.log(req.detail);
//     res.render("admin/index");
// });


router.get("/adminpage", checkadminislogged, (req, res)=>{
	const name = req.params.username;
    //console.log(name);
    //console.log(req.detail);
	//console.log(req.session.user);
	//res.render("index", {"username":name});
	res.redirect("/api/admin/login");
});

//this are the routes used to show the webpages
//for admin
router.get("/index/adminproducts",verifyToken, (req, res)=>{
	res.status(201).render("admin/show_Products", {"username":req.detail.username});
});

//show error page
router.get("/error404", (req, res)=>{
	res.status(201).render("admin/404");
});


//-----------products -----------------------
//create product
router.get("/index/create",verifyToken,verifyAdmin,  (req, res, err)=>{
	//console.log(req.detail);
	//console.log("hi")
	res.status(201).render("admin/createProduct", {"username":req.detail.username});
});

//delete product
router.get("/index/delete",verifyToken, verifyAdmin, (req, res)=>{
	res.status(201).render("admin/deleteProduct", {"username":req.detail.username});
});

//update product
router.get("/index/update/:id", verifyToken, verifyAdmin, (req, res)=>{
	res.status(201).render("admin/updateProduct", {"username":req.detail.username});
});

//-------------------  user info -------------------------

//changeUserPassword
// router.put("/update/userpassword",changeUserPassword);

router.get("/index/usersinfo", verifyToken, (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("admin/users",{"username":req.detail.username});
});

router.get("/index/usersinfo/:id", verifyToken, (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("admin/user", {
		username:req.detail.username
	});
});

router.get("/index/update/userpassword", (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("changepassword");
});


module.exports = router;