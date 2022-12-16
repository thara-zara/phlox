import React from 'react';
import "./Products.css";
import ProductsData from "./ProductsData";
import ProductsItem from './ProductsItem';


const Products = () => {
    const Product = ()=>{
        return(
            ProductsData.map((item, index) =>{
                return(
                    <ProductsItem key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price} 
                        price2={item.price2}
                        cart={item.cart}   
                        sale={item.sale} 
                        sale2={item.sale2}   
                        span={item.span}
                    />
                )
            })
        );
    };            
  return (
    <div class="product">
    <div class="header">
    <h1>Best Seller Products</h1>
    <p>speakerThere are many variations passages</p>
    </div>
    <div class="product-section">
       {Product()}
    </div>
    </div>
  )
};


export default Products;