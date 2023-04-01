require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/Product");
const ProductJson = require("./product.json");

const start = async ()=>{
	try{
       await connectDB(process.env.MONGODB_URL);

       //deleting product
       await Product.deleteMany();

       //adding product
       await Product.create(ProductJson);
       console.log("Success");
	}catch(error){
       console.log(error);
	}
}

start();  //whenever want to add data to database uncomment this and call function "start"