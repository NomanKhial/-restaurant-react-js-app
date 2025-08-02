import "./Cart.css";
import { useAppContext } from "../../context/storeContext";
import { useNavigate } from "react-router";
function Cart() {
  const { food_list, removeFeomCart, cartCount, getTotal, addToCart} = useAppContext();
  const navigate = useNavigate()
 const handleScroll = () => {
  navigate("/#menu");
};

  if (!getTotal()) {
    return <div className="centered">
      <h2>Add Your Favorite Meals into Cart</h2>
      <img src="/public/menu_7.png" />
      <button  className="no-item" onClick={handleScroll}>Explore Menu</button>
    </div>
      }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="rm-mobile">Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartCount[item._id]) {
            return (
              <div key={index} className="food-items">
                <img src={item.image} alt={item.name} />
                <p className="p-name">{item.name}</p>
                <p>${item.price}</p>
                 <div className="group-btns"> <button onClick={()=> removeFeomCart(item._id)}>-</button> <p>{cartCount[item._id]}</p> <button onClick={()=> addToCart(item._id)}>+</button></div>
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
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>2</p>
              </div>
              <hr />
              <div className="cart-total-details total-bold">
                <b>Total</b>
                <b>${getTotal() + 2}</b>
              </div>
              <button onClick={()=> navigate("/order")} className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="promo-code">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder="promo code" />
              <button className="submit-code-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Cart;
