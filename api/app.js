require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const hbs = require("hbs");
const path = require("path");
const {checkuserislogged, verifyToken} = require("./utils/verifyToken");
//const session = require("express-session");//it is used to store information in session and can be used for authentitation, it can be accessed any where, inside any routers.


const connectDB = require("./db/connect");

const PORT = process.env.PORT || 10000;

const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const usersRoute = require("./routes/users");
const usersPages = require("./routes/userpages");
const adminPages = require("./routes/adminpage");


const static_path = path.join(__dirname, "../client/public");
const template_path = path.join(__dirname, "../client/templates/views");
const partials_path = path.join(__dirname, "../client/templates/partials");


//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api", usersPages);
app.use("/api/admin", adminPages);
//app.use("/api/category", categoryRoute);


app.use((err, req, res, next)=>{
	const errorStatus = err.status || 500
	const errorMessage = err.message || "Something went wrong!"

	const myObj = { status: errorStatus, message: errorMessage };
   const encodedObj = encodeURIComponent(JSON.stringify(myObj));
	return res.status(errorStatus).redirect(`/api/error?data=${encodedObj}`); 
});

/*app.use((err, req, res, next)=>{
	const errorStatus = err.status || 500
	const errorMessage = err.message || "Something went wrong!"
	return res.status(errorStatus).json({
		success:false,
		status:errorStatus,
		message:errorMessage,
		stack:err.stack,
	});
});*/

app.get("/api/error", (req, res)=>{
/*	const message = req.params.message;
	console.log(message);*/

  const encodedObj = req.query.data;
  let myObj = JSON.parse(decodeURIComponent(encodedObj));
  console.log(myObj);
	 res.render("admin/404", myObj);
})


const start = async () =>{
	try{
       await connectDB(process.env.MONGODB_URL);

       app.listen(PORT, ()=>{
       	  console.log(`${PORT} Yes I am connected`);
       });
	}catch(error){
       console.log(error);
	}
}

start();


