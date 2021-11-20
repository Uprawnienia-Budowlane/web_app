import React from 'react'

import {Link}  from 'react-router-dom'

import CartItem from './CartItem'

import { Button } from '@material-ui/core'

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
        <Button variant="contained" onClick={handleEmptyCart}><Link to="/shop">Wróc do produktów i usług</Link></Button>
        </div>

    return (    
            <Button variant="contained" style={{ margin: '15px' }} onClick={handleEmptyCart}><Link to="/shop">Wróc do produktów i usług</Link></Button>
    )
}

export default Cart
