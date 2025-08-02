import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { useAppContext } from "../../context/storeContext";
import { useNavigate } from "react-router";
function FoodItem({
  name,
  price,
  image,
  _id,
  description,
  category: mealtype,
}) {
  const { addToCart, removeFeomCart, cartCount } =
    useAppContext();
  const navigate = useNavigate()

  return (
    <div key={_id} className="food-item" onClick={(e)=> {
      e.stopPropagation()
      if(e.target.className == 'food-item-img'){
        navigate(`/meal-details/${_id}`)
      }
    }}>
      <div className="food-item-image">
        <img
          className="food-item-img"
          src={image}
          alt={description}
          loading="lazy"
        />
        {!cartCount[_id] ? (
          <img
            className="add"
            onClick={() => addToCart(_id, name)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="cart-btn-container">
            <img
              onClick={() => removeFeomCart(_id, name)}
              src={assets.remove_icon_red}
            />
            {cartCount[_id]}
            <img
              onClick={() => addToCart(_id, name)}
              src={assets.add_icon_green}
            />
          </div>
        )}
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
