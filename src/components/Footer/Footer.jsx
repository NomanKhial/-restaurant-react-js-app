import { assets } from "../../assets/assets";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="ft-content">
        <div className="ft-left-side  ft-common">
          <img src={assets.logo} alt="footer logo" />
          <p>
            This is so awesome project, i am gonna use it as my college final
            year project.. thank you for making all these awesome real projects
            when other youtubers are just talking about roadmap and some non
            sense topics which is just waste of time in most of the cases.
            Thanks again for this react js project, i really learnt a lot from
            your past projects, mainly from your mern ecommerce project. 😊
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="facebbok social icon" />
            <img src={assets.linkedin_icon} alt="linkding social icon" />
            <img src={assets.twitter_icon} alt="twitter social icon" />
          </div>
        </div>
        <div className="ft-center ft-common">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="ft-right-side ft-common">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 3092222222222222</li>
            <li>dummy@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div>
        <p>Copyright {new Date().getFullYear()} © Made with ❤️ by NomanKhial. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
