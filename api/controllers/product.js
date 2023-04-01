const express = require("express");
const Product = require("../models/Product");
const createError = require("../utils/error");

//create product
const createProduct = async (req, res, next)=>{
	const newProduct = new Product(req.body);

	try{

		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);

	}catch(err){
		next(err);
	}
}

//update product
const updateProduct = async (req, res, next)=>{

	try{

		const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updatedProduct);
	}catch(err){
		next(err);
	}
}

//delete product
const deleteProduct = async (req, res, next)=>{

	try{
		await Product.findByIdAndDelete(req.params.id);
        res.status(200).render("Product has been deleted");
	}catch(err){
		next(err);
	}
}

//Get product
const getProduct = async (req, res, next)=>{

	try{
		const product = await Product.findById(req.params.id);
        res.status(200).json(product);
	}catch(err){
		res.status(500).json(err);
	}
}

//Get product by name
const getProductByname = async (req, res, next)=>{

	try{
		const product = await Product.find({name:req.params.name});
        res.status(200).json(product);
	}catch(err){
		res.status(500).json(err);
	}
} 

//Get all Products
const getAllProduct = async (req, res, next)=>{

	try{
		const products = await Product.find({});
        res.status(200).json(products);
	}catch(err){
		next(err);
	}
}

//Get products based on different fields
const getProductByFields = async (req, res)=>{

	const {company, name, featured, inspired, latest} = req.query;
	const queryObject = {};

	if(company){
		queryObject.company = company;
		console.log(queryObject);
	}

	if(featured){
        queryObject.featured = featured;
	}

	if(inspired){
        queryObject.inspired = inspired;
	}

	if(latest){
        queryObject.latest = latest;
	}

	if(name){
		//queryObject.name = name;
		queryObject.name = { $regex: name, $options: "i"};
	}

    	const products = await Product.find(req.query);
        res.status(200).json(products);

}



module.exports = {createProduct, updateProduct, deleteProduct, getProduct, getAllProduct, getProductByname, getProductByFields};