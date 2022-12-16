import "./Banner.css";
import sale1 from "../assests/2.png";
import React from 'react';
import BannerData from "./BannerData";

export const Banner = () => {
  return (
    <div className="container">
    <div className="sale">
            <BannerData
            text1="20 % OFF"
            text2="HAPPY HOURSE"
            text3="15 Nov To 7 Dec"
            title="Beats Solo Air"
            sale="Summer Sale"
            shop="shop"
            details="Company that's grown from 270 to 480 employees in the last 12 months."
            image={sale1}
            />
    </div>
    </div>
  )
}

export default Banner;