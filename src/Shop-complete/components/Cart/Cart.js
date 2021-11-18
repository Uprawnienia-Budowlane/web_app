import React from 'react'

import {Link}  from 'react-router-dom'

import CartItem from './CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const EmptyCart = () => (
        <h2 style="color:white;">kup se coś, <Link to='/'>ok?</Link></h2>
    )

    const FilledCart = () => (
        <>
        <div className="container-of-filled-cart">
            {cart.line_items.map((item) => (
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
            ))}
        </div>
        </>
    )

    if(!cart.line_items) return <div className="else-message-container">
        <h1>Możliwe, że zapomniałeś czegoś dodać do koszyka ;)</h1>
        </div>

    return (
        <div>
            <div className="cart-itself">
            <img className="product-image" />
            
            <h1>Twój koszyk</h1>
            {!cart.line_items ? <EmptyCart/> : <FilledCart /> }
            <h1>Całość: 
                <p>
                {cart.subtotal.formatted_with_symbol}
                </p>
            </h1>
            <div className="container-for-a-cart-options">
            <button className="checkout-btns first" onClick={handleEmptyCart}>pusty koszyk</button>
           
            </div>
        </div>
        </div>
    )
}

export default Cart
