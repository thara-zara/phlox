import "./Brand.css";
import b1 from "../assests/Group-955.png";
import b2 from "../assests/Group-956.png";
import b3 from "../assests/Group-957.png";
import b4 from "../assests/client-5.png";
import b5 from "../assests/client-9.png";

import React from 'react'

export const Brand = () => {
  return (
    <div class="brand">
        <div class="brand-items">
            <img src={b1} alt="" />
            <img src={b2} alt="" />
            <img src={b3} alt="" />
            <img src={b4} alt="" />
            <img src={b5} alt="" />
        </div>
    </div>
  )
}
export default Brand;
