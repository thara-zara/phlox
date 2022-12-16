import React from 'react';
import "./Header.css";
import Hero1 from "../assests/Group_1271-1.png";

function Header() {
  return (
    <div className='container'>
      <div className="hero">
              <div className="text">
                  <h3>
                      Beats Solo 
                  </h3>
                  <h2>
                      Wireless
                  </h2>
                  <h1>
                      HEADPHONE
                  </h1>
                  
                  <div className="button">
                      <span>
                          Shop By Category
                      </span>
                  </div>
                  <div className="description">
                      
                      <h4>Description</h4>   
                      There are many variations passages, <br/> 
                      of Lorem Ipsum available<br/>
                      but the majority have suffered alteration
                  </div>
                  <div className="image">
                      <img src={Hero1} alt="hero"/>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Header
