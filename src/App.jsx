import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import {routes} from "./pages/routes.js";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import { useState } from "react";
import ScrollToTop from "./components/SrollToTop/ScrollToTop.jsx";

function App() {

  const [loginPopUp, setLoginPopup] = useState(false)

  return (
    <>
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
    </>
  );
}

export default App;
