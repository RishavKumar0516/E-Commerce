
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const path = require("path");
/*const hbs = require("hbs");
const path = require("path");*/

const app = express();


const createError = require("../utils/error"); //we are using createError function here, so to use them frist we have to require it from the location(../utils/error) where this function is defined.


const Register = async(req, res, next)=>{
try{

   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);


	const newUser = new User({
		username:req.body.username,
		email:req.body.email,
		password:hash,
	})

	await newUser.save();
	res.status(200).redirect("/api/auth/login");

}catch(err){
	next(err);
}
}

const Login = async (req, res, next) => {
  try {
    //console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    //const userData = { id: user._id, name: user.username};
    //req.session.user = userData;

    console.log(user._id);

    const { password, isAdmin, ...otherDetails } = user._doc;
      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      //.json({ details: { ...otherDetails }, isAdmin });
      .redirect("/api/auth/user/adminpage");
      //.redirect("/api/auth/user/username/" + user.username);
      //render("index", { details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};



const UserRegister = async(req, res, next)=>{
try{
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);
   const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:hash,
  })

  await newUser.save();
  res.status(200).redirect("/api/user/login");
}catch(err){
  next(err);
}
}

const UserLogin = async (req, res, next) => {
  try {
    //console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    //const userData = { id: user._id, name: user.username};
    //req.session.user = userData;

    console.log(user._id);

    const { password, isAdmin, ...otherDetails } = user._doc;
      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      //.json({ details: { ...otherDetails }, isAdmin });
      .redirect("/api/index");
      //.redirect("/api/index/" + user.username);
      //render("index", { details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};





module.exports = {Register, Login, UserRegister, UserLogin};
