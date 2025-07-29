import "./Cart.css";
import { useAppContext } from "../../context/storeContext";
function Cart() {
  const { food_list, removeFeomCart, cartCount} = useAppContext();
      return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartCount[item._id]) {
            return (
              <div key={index} className="food-items">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartCount[item._id]}</p>
                <p>${item.price * cartCount[item._id]}</p>
                <p
                  onClick={() => removeFeomCart(item._id)}
                  className="remove-item"
                >
                  <span>X</span>
                </p>
              </div>
            );
          }
        })}
        
      </div>
      <hr />
    </div>
  );
}

export default Cart;
