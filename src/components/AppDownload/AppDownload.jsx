import { assets } from "../../assets/assets"
import "./AppDownload.css"
function AppDownload() {
  return (
    <div className="app-download">
        <p>Experience the Best Download Our <br/> App</p>
        <div className="app-download-icons">
            <img src={assets.play_store}/>
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload