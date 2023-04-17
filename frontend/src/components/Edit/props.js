import {updateCoupon } from "../../redux/actions/actions"; 

const mapStateToProps=(state)=>{
    console.log("Edit",state);
    return {
        coupons:state.coupons
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        updateCoupon:(state)=>dispatch(updateCoupon(state))
    }
}

export {mapDispatchToProps,mapStateToProps}