import { useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
function FoodItem({
  name,
  price,
  image,
  _id,
  description,
  category: mealtype,
}) {
    const [cartCount, setCartCount] = useState(0)
  return (
    <div key={_id} className="food-item">
      <div className="food-item-image">
        <img
          className="food-item-img"
          src={image}
          alt={description}
          loading="lazy"
        />
        {
            !cartCount
            ? <img className="add" onClick={()=> setCartCount(prev => prev + 1)} src={assets.add_icon_white} />
            : <div className="cart-btn-container">
                <img onClick={()=> setCartCount(prev => prev - 1)} src={assets.remove_icon_red} />
                {cartCount }
                <img onClick={()=> setCartCount(prev => prev + 1)} src={assets.add_icon_green} />
            </div>

        
        }
      </div>

      <div className="food-item-info">
        <div className="meal-rating-info">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="stars rating" />
        </div>

        <p className="food-description">{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
