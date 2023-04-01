const express = require("express");

const router = express.Router();

const {updateUser, deleteUser, getUser, getAllUser, changeUserPassword} = require("../controllers/user");

const {verifyToken, verifyUser, verifyAdmin} = require("../utils/verifyToken");



//changeUserPassword
router.put("/update/userpassword",changeUserPassword);

router.get("/usersinfo", verifyToken, (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("users",{"username":req.detail.username});
});

router.get("/usersinfo/:id", verifyToken, (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("user", {
		username:req.detail.username
	});
});

router.get("/update/userpassword", (req, res)=>{
    //console.log(req.detail);
	res.status(201).render("changepassword");
});





router.get("/checkauthentication", verifyToken, (req, res, next)=>{
	 res.send("hello user you are logged in");
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
	 res.send("hello user you are logged in and you can delete your account");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
	 res.send("hello admin you are logged in and you can delete all account");
})




//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser );

//GET
router.get("/:id",verifyUser, getUser);

//GETALL
router.get("/",verifyAdmin, getAllUser);












module.exports = router;