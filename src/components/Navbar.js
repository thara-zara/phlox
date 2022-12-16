import React from 'react';
import "./Navbar.css";
import logo from "../assests/logotype.png"

function Navbar() {
/*const [shownav, setShowNav] = useState(false);
const handleClick = () =>setShowNav(!shownav);*/

    return (    
      <div className='nav-bar'>
        <div className="logo">
          <img src={logo} alt="my-img" />
            <ul className="nav-item">
              <i className="fa-solid fa-circle-xmark clo"></i>
              <li>Home</li>
              <li>Shop</li> 
              <li>UsBlog</li>
              <li>Contact Us</li>
              <li>About</li>
            </ul>
          </div>
          <div className="right-nav">
                    <i class="fa-solid fa-magnifying-glass sea"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-solid fa-bars-staggered menu"></i>
                </div>
                <div className="search clos">
                    <div className="search-bar">
                    <input type="text" placeholder="search here" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="close-icon">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
          </div>
      </div>
)
  }
export default Navbar;