const mongoose = require("mongoose");

//const review = require("../models/Review");

const reviewSchema = mongoose.Schema({
	name:{
		type:String,
        required:true
	},
	rating:{
		type:Number,
        required:true
	},
	comment:{
		type:String,
		required:true
	}

})


const productSchema = mongoose.Schema({
	name:{
		type:String,
		required:true 
	},
	category:{
		type:String,
		required:true 
	},
	subcategory:{
		type:String,
		required:true 
	},
    title:{
		type:String,
		required:true 
	},
	image:{
		type:[String],
		required:true
	},
	description:{
		type:String,
		required:true 
	},
	reviews:[reviewSchema],
	rating:{
		type:Number,
		required:true,
		min:1,
		max:5
	},
	numReviews:{
		type:Number,
		required:true,
	},
	featured:{
		type:Boolean,
		required:true,
	default:false
	},
	inspired:{
		type:Boolean,
	default:false
	},
	latest:{
		type:Boolean,
	default:false
	},
	price:{
		type:Number,
		required:true,
	},
	discountPercent:{
		type:String,
		required:true
	},
	discountPrice:{
		type:String
	},
	countInStock:{
		type:Number,
	default:0
	}

})

module.exports = mongoose.model("Product", productSchema);