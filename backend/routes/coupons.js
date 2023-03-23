const express = require('express');
const router=express.Router();

const{
    getAllCoupons,
    getCouponById,
    addCoupon,
    deleteById,
    updateCoupon,
    isActive

}=require("../controllers/coupons");


// Coupons
router.route("/").get(getAllCoupons);
router.route("/getCoupon/:id").get(getCouponById);
router.route("/isActive").get(isActive);

router.route("/add/:id").post(addCoupon);
router.route("/delete/:id").delete(deleteById);
router.route("/edit/:id").put(updateCoupon);

module.exports=router;