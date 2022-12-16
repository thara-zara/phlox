import React from 'react';
import "./Icon.css";
import svg1 from "../assests/noun_delivery_1095359.svg";
import svg2 from "../assests/Group-995.svg";
import svg3 from "../assests/noun_guarantee_952398.svg";
import svg4 from "../assests/noun_Wallet_745515.svg";
import IconData from './IconData';

const Icons = () => {
  return (
    <div class="icons">
                <div className="about">
                <IconData
                    image={svg1}
                    text="Shipping"
                    subtext="Free Shipping For All Orders"
                />
                </div>
                <div className="about">
                <IconData
                    image={svg2}
                    text=" Online Support 24/7"
                    subtext="Technical Support 24/7"
                />
                </div>
                <div className="about">
                <IconData
                    image={svg3}
                    text="Money Guarantee"
                    subtext="30 Day Money Back"
                />
                </div>
                <div className="about">
                <IconData
                    image={svg4}
                    text="Secure Payment"
                    subtext="All Cards Accepted"
                />
                </div>
            </div>
  )
}

export default Icons