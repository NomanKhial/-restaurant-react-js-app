import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopUp.css";
const LoginPopUp = ({ setLoginPopup }) => {
  const [currState, setCurrState] = useState("sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-header">
          <h2>{currState}</h2>
          <img onClick={() => setLoginPopup(false)} src={assets.cross_icon} />
        </div>
        <div className="input-group">
          {currState === "sign up" && (
            <input type="text" placeholder="Enter you name" required />
          )}
          <input type="email" placeholder="Enter you email" required />
          <input type="password" placeholder="Enter you password" required />
        </div>
        <button>{currState === "sign up" ? "Create Account" : "Login"}</button>
        <div className="popup-conditions">
          <input type="checkbox" required />
          <p>
            By, continuing meanns that you agree with our terms and conditions
          </p>
        </div>

        {currState === "login" ? (
          <p>
            Create new Account? <span className="tomato" onClick={()=> setCurrState('sign up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account? <span className="tomato" onClick={()=> setCurrState('login')}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
