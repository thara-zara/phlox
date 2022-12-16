import React from "react"
import "./Category.css"
import CategoryDetails from "./CategoryDetails";
import cat1 from "../assests/Mask-Group-5-1.png";
import cat2 from "../assests/1.png";
import cat3 from "../assests/Laptop.png";
import cat4 from "../assests/man-wearing-virtual-reality-headset-at-home-D7AYCTV-2.png";
import cat5 from "../assests/NicePng_ps4-png_193822.png";
import cat6 from "../assests/P6YUXW1.png";
import Icons from "./Icons";


const Category = () => {
  return (
    <div className='container'>
      <div className="category">
            <div className="top">
                <div className="card card1">
                    <CategoryDetails
                    image={cat1}
                    text="Enjoy"
                    subtext="Best"
                    name="earphone"
                    brows="Browse"
                    />
                </div>
                <div className="card card2">
                    <CategoryDetails
                    image={cat2}
                    text="Enjoy"
                    subtext="Best"
                    name="gadget"
                    brows="Browse"
                    />
                </div>
                <div className="card card3">
                    <CategoryDetails
                    image={cat3}
                    text="Enjoy"
                    subtext="Best"
                    name="laptops"
                    brows="Browse"
                    />
                </div>
            </div>

            <div className="bottom">
                <div className="cards card4">
                <CategoryDetails
                    image={cat5}
                    text="Best"
                    subtext="Gaming"
                    name="Console"
                    brows="Browse"
                    />
                </div>
                <div className="cards card5">
                <CategoryDetails
                    image={cat4}
                    text="Best"
                    subtext="Gaming"
                    name="OCULUS"
                    brows="Browse"
                    />
                </div>
                <div className="cards card6">
                <CategoryDetails
                    image={cat6}
                    text="new"
                    subtext="amazon"
                    name="speaker"
                    brows="Browse"
                    />
                </div>
            </div> 

            <Icons/>
        </div>
    </div>
  )
}

export default Category
