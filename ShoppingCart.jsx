// ShoppingCart.js
import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const items = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 15 },
        { id: 3, name: 'Item 3', price: 20 },
    ];

    const addItem = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
        setTotal(total + item.price);
    };

    const removeItem = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem.quantity === 1) {
            setCart(cart.filter(cartItem => cartItem.id !== item.id));
        } else {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity - 1 } 
                    : cartItem
            ));
        }
        setTotal(total - item.price);
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <div className="item-controls">
                                <button onClick={() => removeItem(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => addItem(item)}>+</button>
                            </div>
                            <span className="item-price">${item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>
            )}
            <div className="cart-total">
                <span>Total: ${total}</span>
            </div>
            <button className="checkout-button" disabled={cart.length === 0}>
                Checkout
            </button>
        </div>
    );
};

export default ShoppingCart;