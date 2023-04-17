import React, { Component } from 'react'
import './stylecard.css';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import Edit from '../Edit/index';
import { getCouponById } from '../../redux/actions/actions';
class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            _id:this.props.match.params._id,
            couponCode:'',
            discount:'',
            issueDate:'',
            expiryDate:'',
            update:false
        }
        // this.props.getCouponById(this.state._id);
        // alert(this.props.match.params._id)
    }
    componentDidMount(){
      console.log(this.state._id);
      this.props.getCouponById(this.state._id);
      const{ couponCode,discount,issueDate,expiryDate}=this.state;
        
        // this.setState=(
        //   {couponCode:this.props.details.couponCode},
        //   {discount:this.props.details.discount},
        //   {issueDate:this.props.details.issueDate},
        //   {expiryDate:this.props.details.expiryDate}
        // )
    }
    handleUpdate=(val)=>{
      const {update}=this.state;
      this.setState({update:true});
    }
  render() {
    console.log(this.props.details);
    var {_id,couponCode,discount,issueDate,expiryDate}=this.state;

    console.log(this.state.update);

    if(this.props.details!==null){
      var{_id,couponCode,discount,issueDate,expiryDate}=this.props.details;
    }
    

    return (
      <div className='Card'>
      {this.state.update?<Edit _id={_id}
                    couponCode={couponCode} 
                    discount={discount} 
                    issueDate={issueDate} 
                    expiryDate={expiryDate}
                    ></Edit>:
          <div className="cardbox" >
              <div className="contain">
                  <h3>Couponcode   <pre>{couponCode}</pre></h3>
                  <h4>Discount: <span>  {discount}</span></h4>
                  <h4>Issuedate: <span>  {issueDate}</span></h4>
                  <h4>Expirydate: <span>  {expiryDate}</span></h4>  
                <div className="bttn">
                    <center><button onClick={this.handleUpdate}>Update  <i class="fa fa-pencil"></i></button></center>
                    </div>
              </div>
          </div>
          }
      </div>
    )
  }
}
Card.propTypes={
    getCouponById:PropTypes.func,
}
export default Card;