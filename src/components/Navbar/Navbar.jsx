import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  return (
    <header>
    <nav>
        {/* logo goes here */}
        <img src={assets.logo} alt="logo" className="logo" />

        {/* navigation */}
       
          {/* centered menu */}
          <ul className="navbar-menu">
            <li onClick={()=> setActiveLink('home')} className={activeLink == "home" ? 'activeLink' : ''}>home</li>
            <li onClick={()=> setActiveLink('menu')} className={activeLink == "menu" ? 'activeLink' : ''}>menu</li>
            <li onClick={()=> setActiveLink('mobile')} className={activeLink == "mobile" ? 'activeLink' : ''}>mobile</li>
            <li onClick={()=> setActiveLink('contactus')} className={activeLink == "contactus" ? 'activeLink' : ''}>contact us</li>
          </ul>

          {/* right menu */}
          <div className="navbar-right">
            <img src={assets.search_icon} />

            <div className="mini-menu">
              <img src={assets.basket_icon} />
              <div className="dot"></div>
            </div>

            <button className="nav-btn">Sign In</button>
          </div>
  </nav>
    </header>
  );
}

export default Navbar;
