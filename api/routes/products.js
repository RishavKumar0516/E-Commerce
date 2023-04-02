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

module.exports = router;
