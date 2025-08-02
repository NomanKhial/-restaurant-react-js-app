import { Link, NavLink } from "react-router";
import { useAppContext } from "../../context/storeContext";
import "./MobileMenu.css";
function MobileMenu() {
  const { setMobileMennu, mobileMenu } = useAppContext();
    const handleCloseMenu = () => setMobileMennu(false);

  return (
    <aside className={mobileMenu ? "open-menu" : ""}>
      <div className="sidebar">
        <div className="mobile-menu-top">
          <input type="text" placeholder="search you fav meals" />
          <button onClick={() => setMobileMennu(false)}>X</button>
        </div>
        <ul>
          <li onClick={handleCloseMenu}> 
            <Link to='/'>Home</Link>
          </li>
          <li  onClick={handleCloseMenu}>
            <Link to='#menu'>Menu</Link>
          </li>
          <li  onClick={handleCloseMenu}>
            <Link to='#download-app'>Download App</Link>
          </li>
          <li  onClick={handleCloseMenu}>
            <Link to='#contact'>Cotact Us</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default MobileMenu;
