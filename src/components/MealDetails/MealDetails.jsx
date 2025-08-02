import { useNavigate, useParams } from "react-router";
import { useAppContext } from "../../context/storeContext";
import "./MealDetail.css";
import { assets } from "../../assets/assets";
function MealDetails() {
  const navigate = useNavigate();
  const { addToCart } = useAppContext();
  const { id } = useParams();
  const { food_list } = useAppContext();
  return (
    <div className="meal-container">
      <div className="flex-conatainer">
      <p onClick={() => navigate(-1)} className="back-btn">
        <span>back</span>
      </p>
        <h2>Meal Details</h2>
      </div>
      {food_list.map(
        ({ _id, image, name, price, description, category }) =>
          _id === id && (
            <div className="meal-detail-card">
              <div key={_id}>
                <img className="featured-img" src={image} alt={name} />
                <p className="category">
                  <span>{category}</span>
                </p>
              </div>
              <div className="wrapper">
                <div className="rating-info">
                  <p>{name}</p>
                  <img src={assets.rating_starts} alt="stars for rating" />
                </div>
                <p>{description}</p>
                <div className="tag-order">
                  <p className="price-tag">${price}</p>
                  <button
                    onClick={() => {
                      addToCart(_id);
                      navigate("/cart");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default MealDetails;
