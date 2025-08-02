import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import {  useState } from "react";
import { useAppContext } from "../../context/storeContext.jsx";
import { Link, NavLink } from "react-router";
import useLocalStorage from "../../Hooks/useLocalStorage.jsx";
import { TfiMenu } from "react-icons/tfi";
import { MdLightMode } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";

function Navbar({ setLoginPopup, loginPopUp }) {
  const [activeLink, setActiveLink] = useState("home");
  const { getTotal, setSeachDisplay, mode, setMode, setMobileMennu, mobileMenu} = useAppContext();
  const {getLocalStorage, setLocalStorage} = useLocalStorage()
  

  function handleThemeMode() {
    setMode(mode == 'light' ? 'dark' : 'light')
     setLocalStorage('mode', mode)
  }

  return (
    <header>
      <nav>
        {/* logo goes here */}
        <NavLink to="/">
          {" "}
          <img src={assets.logo} alt="logo" className="logo" />
        </NavLink>

        {/* navigation */}

        {/* centered menu */}
        <ul className="navbar-menu">
          <NavLink
            to="/"
            onClick={() => setActiveLink("home")}
            className={activeLink == "home" ? "activeLink" : ""}
          >
            home
          </NavLink>
          <a
            href="#menu"
            onClick={() => setActiveLink("menu")}
            className={activeLink == "menu" ? "activeLink" : ""}
          >
            menu
          </a>
          <a
            href="#download-app"
            onClick={() => setActiveLink("mobile")}
            className={activeLink == "mobile" ? "activeLink" : ""}
          >
            mobile
          </a>
          <a
            href="#contact"
            onClick={() => setActiveLink("contactus")}
            className={activeLink == "contactus" ? "activeLink" : ""}
          >
            contact us
          </a>
        </ul>

        {/* right menu */}
        <div className="navbar-right">
        <div className="nav-hidden">
            <img
            onClick={(e)=> {
              e.stopPropagation()
              setSeachDisplay(prev => !prev)
            }}
            className="search-icon"
            src={assets.search_icon}
          />

          <div className="mini-menu">
            <Link to="/cart">
              <img src={assets.basket_icon} />
            </Link>
            <div className={getTotal() > 0 ? "dot" : ""}></div>
          </div>

          <button
            onClick={() => setLoginPopup((prev) => !prev)}
            className="nav-btn"
          >
            {loginPopUp ? "Sign Out" : "Sign In"}
          </button>
        </div>
         <div className="mini-menu mobile-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} />
            </Link>
            <div className={getTotal() > 0 ? "dot" : ""}></div>
          </div>
           <div className="btn-group "><button className="mode-btn" onClick={handleThemeMode}><MdLightMode /></button>
          <button className="mode-btn mobile-icon" onClick={()=> setMobileMennu(prev => !prev)}>{ mobileMenu ? <RiCloseLargeLine /> : <TfiMenu />  }</button></div>
        </div>
        
      </nav>
    </header>
  );
}

export default Navbar;
