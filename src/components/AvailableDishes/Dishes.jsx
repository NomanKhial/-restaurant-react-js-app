import { useAppContext } from "../../context/storeContext";
import  "./Dishes.css";

function Dishes({catagory}) {
    const {food_list: meals} = useAppContext()
     
  return (
    <div>
        {
                meals.map(({image, name, id})=>(
                    <div key={id}>
                        <img src={image}/>
                        <p>{name}</p>
                    </div>
                ))
        }
    </div>
  )
}

export default Dishes