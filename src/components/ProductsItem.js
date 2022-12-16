import "./Products.css";
import React from 'react';


function ProductsItem (props) {
  return (
    <>
    <div className="single-product">
        <div className="image">
            <img src={props.image} alt="123" />
        </div>
        <div className="name">
            {props.name}   
        </div>
        <div className="price">
          <span class="price-all"><span className={props.span}>{props.price}</span> {props.price2}</span>    
            <span className="cart">
            {props.cart}
            </span>
        </div>
        <div className={props.sale2}>
          <span>
            {props.sale}
          </span>
        </div>
    </div>
    </>
  )
}

export default ProductsItem;
