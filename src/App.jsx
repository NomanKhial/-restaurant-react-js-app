import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import {routes} from "./pages/routes.js";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import { useState } from "react";
import ScrollToTop from "./components/SrollToTop/ScrollToTop.jsx";
import Search from "./components/Search/Search.jsx";
import { useAppContext } from "./context/storeContext.jsx";
import useLocalStorage from "./Hooks/useLocalStorage.jsx";
import MobileMenu from "./components/MobileMenu/MobileMenu.jsx";
import Message from "./components/Message/Message.jsx";

function App() {
  const {searchDisplay, mode, setSeachDisplay, mobileMenu} = useAppContext()

  const [loginPopUp, setLoginPopup] = useState(false)
  const {getLocalStorage} = useLocalStorage()

  return (
    <div onClick={(e)=>{
      e.preventDefault()
     if(e.target.tagName != 'INPUT'){
       setSeachDisplay(false)
     }

     console.log(getLocalStorage('mode'))

     
    }} className={getLocalStorage('mode') === 'light' ? 'light-mode' : 'dark-mode'}>
     { loginPopUp ? <LoginPopUp setLoginPopup={setLoginPopup} /> : <></>}
      <div className="app">
      <Navbar loginPopUp={loginPopUp} setLoginPopup={setLoginPopup} />
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
    </div>
     <Footer/>
     <ScrollToTop/>
    {searchDisplay && <Search/>}
    <MobileMenu/>
    <Message/>
    </div>
  );
}

export default App;
