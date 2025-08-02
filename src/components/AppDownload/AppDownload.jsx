import { assets } from "../../assets/assets"
import "./AppDownload.css"
function AppDownload() {
  return (
    <div className="app-download" id="download-app">
        <h4>Experience the Best Download Our <br/> App</h4>
        <div className="app-download-icons">
           <div> <img src={assets.play_store}/></div>
          <div><img src={assets.app_store} /></div>
        </div>
    </div>
  )
}

export default AppDownload