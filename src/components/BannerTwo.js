import "./Banner.css";
import React from 'react';
import sale2 from "../assests/O6CCQV1.png";
import BannerData from './BannerData';

const BannerTwo = () => {
  return (
    <div className="container">
    <div className="sale2">
            <BannerData
            text1="20 % OFF"
            text2="HAPPY HOURSE"
            text3="15 Nov To 7 Dec"
            title="smart watch"
            sale="Summer Sale"
            shop="shop"
            details="Company that's grown from 270 to 480 employees in the last 12 months."
            image={sale2}
            />
    </div>
    </div>
  )
}

export default BannerTwo;