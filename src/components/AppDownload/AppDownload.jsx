import { assets } from "../../assets/assets"
import "./AppDownload.css"
function AppDownload() {
  return (
    <div className="app-download" id="download-app">
        <h4>Experience the Best Download Our <br/> App</h4>
        <div className="app-download-icons">
            <img src={assets.play_store}/>
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload