const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const createError = require("../utils/error");


const verifyToken = (req, res, next)=>{
	const token = req.cookies.access_token;
	if(! token){
		return next(createError(401, "you are not authenticated! please Login..."));
	}
	jwt.verify(token, process.env.JWT, async (err, user)=>{
		if(err) return next(createError(403, "token is not valid"));
		const detail = await User.findOne({_id:user.id});
		//yeha hum jitna bhi properties create kare ge, sab ko hum us function mai use ker shakte ha, jo iss middleware ko call ker reha hai
		req.user = user;
		req.detail = detail;
		next();
	})

}

const verifyUser = (req, res, next)=>{
	verifyToken(req, res, ()=>{
		if(req.user.id === req.params.id || req.user.isAdmin){
			next();
		}
		else{
			return next(createError(403, "you are not authorized"));
		}
	})
}

const verifyAdmin = (req, res, next)=>{
	verifyToken(req, res, ()=>{
		if(req.user.isAdmin){
			next();
		}
		else{
			return next(createError(403, "you are not authorized"));
		}
	})
}


const checkadminislogged = async (req, res, next)=>{

	const token = req.cookies.access_token;
	if(!token){
		return next();
	}
	jwt.verify(token, process.env.JWT, async (err, user)=>{
		if(err) return next();
		const detail = await User.findOne({_id:user.id});
		if(detail.isAdmin){
			res.render("index", {username:detail.username});
		}
		else{
            res.redirect("/api/auth/login");
		}
	})


	//or
	
	/*const token = req.cookies.access_token;
	if(! token){
		//return next(createError(401, "you are not authenticated! please Login..."));
		return next();
	}
	jwt.verify(token, process.env.JWT, async (err, user)=>{
		if(err) return next();
		const detail = await User.findOne({_id:user.id});
		//yeha hum jitna bhi properties create kare ge, sab ko hum us function mai use ker shakte ha, jo iss middleware ko call ker reha hai
		req.user = user;
		req.detail = detail;
		next();
	})*/
	
}



//iske use kerne par hoga ye ki agar koi user login ker ke website to close ker deta hai, aur agar wo kuch der baad phir 
//visit kerega tou usse login kerne ki jarurat nahi
const checkuserislogged =async (req, res, next)=>{

	const token = req.cookies.access_token;
	if(!token){
		return next();
	}
	jwt.verify(token, process.env.JWT, async (err, user)=>{
		if(err) return next();
		const detail = await User.findOne({_id:user.id});
		res.render("user/index", {username:detail.username});
	})
	
}


const verifyTokenForPages = (req, res, next)=>{
	const token = req.cookies.access_token;
	if(! token){
		next();
	}
	jwt.verify(token, process.env.JWT, async (err, user)=>{
		if(err) next();
		const detail = await User.findOne({_id:user.id});
		//yeha hum jitna bhi properties create kare ge, sab ko hum us function mai use ker shakte ha, jo iss middleware ko call ker reha hai
		req.user = user;
		req.detail = detail;
		next();
	})

}

/*if the user is not logged in, it returns empty string with no user name
and if user is logged in it returns the whole detail of user.*/
const Checkuserisvalidate = async (req, res, next)=>{

	var userinfo = {
		username:""
	};

	try{

        const token = await req.cookies.access_token;//getting token stored at cookies
        const verifyUser = await jwt.verify(token, process.env.JWT);
        // console.log(verifyUser);

        const user = await User.findOne({_id:verifyUser.id})
        req.token = token;
        req.detail = user;
        
        next();
    }
    catch(error){
    	// console.log("not verified")
    	// res.status(200).json(userinfo);
    	req.detail = userinfo;
    	next();
    }

}






module.exports = {verifyToken, verifyUser, verifyAdmin, checkadminislogged, checkuserislogged, verifyTokenForPages, Checkuserisvalidate};