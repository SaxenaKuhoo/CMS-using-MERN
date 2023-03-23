const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Required"]
    },
    email:{
        type:String,
        required:[true,"Email id is mandatory to proceed"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter ypur password"],
        minlength:8
    },
    coupons:[{
        type:mongoose.Types.ObjectId,
        ref:"Coupon",
        required:true
    }]
});

module.exports=mongoose.model("User",UserSchema);

// export default mongoose.model("User", UserSchema);