import React from 'react';
import "../Styles/home1.css";
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { removeFromCart } from '../redux/actions/cartActions';

function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log(total);

  return (
    <>
    <h1>My Cart</h1>
    <div className='maincont1'>
      
      <div className='cont1'>  
        {items.length > 0 && items.map((item) => (
          <Product 
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            btnText="Remove from Cart"
            handle={() => handleRemoveFromCart(item.id)}
            quantity={item.quantity}
          />
        ))}
      </div>
      {items.length > 0 && (
        <div className="checkout-list">
          <h2>Checkout List</h2>
          <div className="checkout-items">
            {items.map((item, index) => (
              <div key={item.id} className="checkout-item">
                <span>{item.quantity} . {item.title}</span>
                <span>${item.price} x {item.quantity}</span>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <div className="checkout-total">
            <strong>Total:</strong> <span>${total}</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => alert("Proceeding to checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    </>
  );
}

export default Cart;