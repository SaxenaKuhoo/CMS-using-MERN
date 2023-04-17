import React, {Component} from "react";
import './card.css'
import PropTypes from 'prop-types';
import Add from '../AddCoupon/index';
import Card from "../Card/index";
import { Link } from "react-router-dom";
// import DialogCard from "../DialogCard/DialogCard";

class Coupon extends Component{
    constructor(props){
        super(props)
        
        this.state={
            couponCode:'',
            discount:'',
            issueDate:'',
            expiryDate:'',
            showMyComponent: false,
            update:false,
            isDialogOpen:false

        }
    }
    handleDialog=()=>{
        const {isDialogOpen}=this.state;
        this.setState({isDialogOpen:!isDialogOpen});
    }
    handleShowButton=(val)=>{
        const {showMyComponent}=this.state;
        this.setState({showMyComponent:true});
        console.log("Show Card Clicked");
    }
    handleEditButton=(val)=>{
        this.setState({update:true})    
    }
    handleDelete=()=>{
        console.log("Delete",this.props);
        console.log(this.props._id);
        this.props.deleteCoupon(this.props._id);
    }
    render(){
        console.log(this.props);
        const{_id,couponCode,discount,issueDate,expiryDate}=this.props;
        const {showMyComponent}=this.state;
        let dateObj = new Date(issueDate);
        let day = dateObj.getUTCDate().toString().padStart(2, "0");
        let month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
        let year = dateObj.getUTCFullYear().toString();
        const formattedissueDate = `${day}/${month}/${year}`;

        
        dateObj = new Date(expiryDate);
        day = dateObj.getUTCDate().toString().padStart(2, "0");
        month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
        year = dateObj.getUTCFullYear().toString();
        const formattedexpiryDate = `${day}/${month}/${year}`;

        const newTo = { 
            pathname: "/coupon", 
            param1:  {_id,discount,couponCode,formattedissueDate,formattedexpiryDate,showMyComponent}
          };
        const editTo={
            pathname:"/add",
            _id:{_id},
            couponCode:{couponCode},
            discount:{discount}, 
            issueDate:{issueDate},
            expiryDate:{expiryDate},
            eupdate:true,
        };
        // console.log(this.location.props);
        // if(showMyComponent){

        // }
        
        return(
            // key={couponCode.id}
            // <div>{this.state.showMyComponent?<Card _id={_id}></Card>:
            // <div>
            // {this.state.update?<Add _id={_id}
            // couponCode={couponCode} 
            // discount={discount} 
            // issueDate={issueDate} 
            // expiryDate={expiryDate}
            // eupdate={true}
            // ></Add>:
    
            <div className="card-box" >
                <div className="container">
                    <h3>    {couponCode}</h3>
                    {/* <h3>Couponcode:   <pre>  {couponCode}</pre></h3> */}
                    <h4><span> &#8377; {discount}</span></h4>
                    {/* <h4>Discount: <span>{discount}</span></h4> */}
                    {/* <h4>Issuedate: <span>{formattedissueDate}</span></h4> */}
                    {/* <h4>Expirydate: <span>{formattedexpiryDate}</span></h4> */}
                    

                <div className="btn">
                <Link to={`/coupon/${_id}`}><button><i class="fa fa-eye"></i> Show </button></Link>
                    <button onClick={this.handleDelete}>Delete <i class="fa fa-trash" ></i></button>
                </div>
            </div>
            </div>
        )
    }
}
Coupon.propTypes={
    deleteCoupon:PropTypes.func,
}

export default Coupon

  