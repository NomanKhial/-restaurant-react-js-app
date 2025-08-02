import { useAppContext } from "../../context/storeContext"
import "./MobileMenu.css"
function MobileMenu() {
    const {setMobileMennu, mobileMenu} = useAppContext()
  return (
    <aside className={mobileMenu ? 'open-menu' : ''}>
        <div className="mobile-menu-top">
            <input type="text" placeholder="search you fav meals"/>
              <button onClick={()=> setMobileMennu(false)}>X</button>
        </div>
        <ul>
            <li>Home</li>
             <li>About</li>
              <li>Services</li>
               <li>Contact</li>
                <li>Explore</li>
        </ul>
    </aside>
  )
}

export default MobileMenu