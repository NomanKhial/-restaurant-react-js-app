import { useAppContext } from "../../context/storeContext";
import FoodItem from "../FoodItem/FoodItem";
import  "./Dishes.css";

function Dishes({catagory}) {
    const {food_list: meals} = useAppContext()
     
  return (
    <div className="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
          {
            meals.map(({name, price, image, _id, description, category : mealtype})=> {
               if(catagory === 'All' || catagory === mealtype){
              return <FoodItem name={name} price={price} image={image} key={_id} _id={_id} description={description} mealtype={mealtype} />
              }
            })
          }
      </div>
    </div>
  )
}

export default Dishes