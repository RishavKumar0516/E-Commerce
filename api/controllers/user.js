const express = require("express");
const User = require("../models/User");
const createError = require("../utils/error");


//update user
const updateUser = async (req, res, next)=>{

	try{
		const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updatedUser);
	}catch(err){
		next(err);
	}
}

//delete user
const deleteUser = async (req, res, next)=>{

	try{
		await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Account has been deleted");
	}catch(err){
		next(err);
	}
}

//Get user
const getUser = async (req, res, next)=>{

	try{
		const user = await User.findById(req.params.id);
        res.status(200).json(user);
	}catch(err){
		res.status(500).json(err);
	}
}

//Get all user
const getAllUser = async (req, res, next)=>{

	try{
		const users = await User.find({});
        res.status(200).json(users);
	}catch(err){
		next(err);
	}
}

//change user password
const changeUserPassword = async (req, res, next)=>{
        console.log(req.body);
        const user1 = await User.findOne({username:req.body.username});
        console.log(user1);
     	if(!user1){
     	     	return next(createError(400, "Wrong username or password and Confirm Password not matched!"));
     	}
/*     
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);*/
     
        const updatedUserPassword = await User.findByIdAndUpdate(user1._id, {$set:req.body}, {new:true});
        res.status(200).json(updatedUserPassword);

}



module.exports = {updateUser, deleteUser, getUser, getAllUser, changeUserPassword};