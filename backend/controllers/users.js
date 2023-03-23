const User = require("../models/Admin");
const bcrypt=require("bcryptjs");


const userSignUp=async(req,res)=>{
    try{
        console.log("Sign Up Here...");
        const {userName,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(500).json({message:"User Already Exists with this email"});
        }

        const hashedPassword=bcrypt.hashSync(password);

        const user=new User({
            userName,email,
            password:hashedPassword,
            coupons:[]
        });
        await user.save();
        console.log("User registered Successfully...")
        res.status(200).json({user});
    }
    catch(error){
        return console.log(error);
    }
}
const userLogin=async(req,res)=>{
    try{
        console.log("Login Here...");
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(500).json({message:"User does not exist"});
        }
        const isPasswordCorrect=bcrypt.compareSync(password,user.password);
        if(!isPasswordCorrect){
            return res.status(300).json({message:"Incorrect Password "});
        }
        return res.status(200).json({message:"Login Succuessful"});
    }
    catch(error){
        console.log(error);
    }   
};

const getAllUsers=async(req,res)=>{
    const Users=await User.find({}).populate("coupons");
    res.status(200).json({Users});
};

module.exports={userSignUp,userLogin,getAllUsers}