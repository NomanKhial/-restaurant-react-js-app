import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import { useAppContext } from "../../context/storeContext.jsx";
import { Link, NavLink } from "react-router";

function Navbar({setLoginPopup, loginPopUp}) {
  const [activeLink, setActiveLink] = useState('home')
  const {cartCount} = useAppContext()


  return (
    <header>
    <nav>
        {/* logo goes here */}
       <NavLink to='/'> <img src={assets.logo} alt="logo" className="logo" /></NavLink>

        {/* navigation */}
       
          {/* centered menu */}
          <ul className="navbar-menu">
            <NavLink to='/' onClick={()=> setActiveLink('home')} className={activeLink == "home" ? 'activeLink' : ''}>home</NavLink>
            <a href="#menu" onClick={()=> setActiveLink('menu')} className={activeLink == "menu" ? 'activeLink' : ''}>menu</a>
            <a href="#download-app" onClick={()=> setActiveLink('mobile')} className={activeLink == "mobile" ? 'activeLink' : ''}>mobile</a>
            <a href="#contact" onClick={()=> setActiveLink('contactus')} className={activeLink == "contactus" ? 'activeLink' : ''}>contact us</a>
          </ul>

          {/* right menu */}
          <div className="navbar-right">
            <img src={assets.search_icon} />

            <div className="mini-menu">
              <Link to='/cart'><img src={assets.basket_icon} /></Link>
              <div className="dot">{cartCount['itemId']}</div>
            </div>

            <button onClick={()=> setLoginPopup(prev => !prev)} className="nav-btn">{loginPopUp ? 'Sign Out' : 'Sign In' }</button>
          </div>
  </nav>
    </header>
  );
}

export default Navbar;
