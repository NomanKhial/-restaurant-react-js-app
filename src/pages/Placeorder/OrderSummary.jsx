import { useAppContext } from "../../context/storeContext";
import "./OrderSummary.css";
function OrderSummary() {
  const {getTotal} = useAppContext()
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery</p>
      <div className="multi-fields">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Email Address" />
      <input type="text" placeholder="Email Address" />
      <div className="multi-fields">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="Zip Code" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="Phone" />
      </div>
      <div className='place-order-right'>
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
              <button className="checkout-btn">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default OrderSummary;
