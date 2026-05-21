import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image}
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button 
          className="quantity-btn"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        ${item.totalPrice.toFixed(2)}
      </div>
      <button 
        className="delete-btn"
        onClick={() => dispatch(removeItem(item.id))}
      >
        🗑️
      </button>
    </div>
  );
};

// Cart component (Shopping Cart page)
export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Coming Soon! Checkout feature will be available shortly.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <button className="continue-shopping-btn" onClick={() => navigate('/plants')}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <div className="cart-total">
          <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
        </div>
        <div className="cart-buttons">
          <button className="continue-shopping-btn" onClick={() => navigate('/plants')}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;