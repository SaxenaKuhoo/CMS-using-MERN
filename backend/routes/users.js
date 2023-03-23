const express = require('express');
const router=express.Router();

const{
    userLogin,
    userSignUp,
    getAllUsers,

}=require("../controllers/users")

// User

router.route("/").get(getAllUsers);
router.route("/login").post(userLogin);
router.route("/signup").post(userSignUp);

module.exports=router;