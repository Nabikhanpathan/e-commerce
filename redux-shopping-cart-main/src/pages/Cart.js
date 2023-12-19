/*import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.mark);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;*/
// YourCartComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, clearCart, makePayment, remove } from '../store/cartSlice';
import { useEffect } from 'react';

const YourCartComponent = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.mark);

    // Check if cartItems is undefined before accessing its length property
   
    if (!cartItems) {
        return <h2>Your cart is empty.</h2>;
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleMakePayment = () => {
        const confirmed = window.confirm("Are you sure you want to proceed with the payment?");
        if (confirmed) {
            dispatch(makePayment());
        }
    };
   

    return (
        <div>
            {/* Render cart items with quantities */}
            <div className="cartWrapper">
                {cartItems.map((item) => (
                    <div key={item.id} className="cartCard">
                        <img src={item.image} alt="" />
                        <h5>{item.title}</h5>
                        <h5>{/* Consider formatting the price here */item.price}</h5>
                        <button
                            className="removeButton"  // Consistent styling class
                            onClick={() => handleRemove(item.id)}
                        >
                            Remove
                        </button>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    </div>
                ))}
            </div>
            
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={handleMakePayment}>Make Payment</button>
            {/* ... (rest of your component) */}
        </div>
    );
};

export default YourCartComponent;
