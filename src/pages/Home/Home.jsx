
import { useState } from "react"
import Menu from "../../components/ExploreMenu/Menu"
import Header from "../../components/Header/Header"
import "./home.css"
import Dishes from "../../components/AvailableDishes/Dishes"
function Home() {
  const [catagory, setCatagory] = useState('All')
  return (
    <div>
      <Header/>
      <Menu catagory={catagory} setCatagory={setCatagory}/>
      <Dishes catagory={catagory}/>
    </div>
  )
}

export default Home