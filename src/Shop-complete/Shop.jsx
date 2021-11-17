import {ThreeInOneIcon} from "../Icons";
import Products from "./components/Products/Products";
import Checkout from './components/CheckoutForm/Checkout'
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

import './scss/shop.css'

import { commerce } from "./lib/commerce";

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());

      };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };
    
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
      };

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log(products)
    console.log(cart)

    /* */


    /* */

    /* const [category, setCategory] = useState(0); */

    
    return (
      <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
            </div>

        <Products products={products} 
        onAddToCart={handleAddToCart} 
        totalItems={cart.total_items}/>
  
        
        
        </div>

        <Checkout
        
        />

        </>
        
    );
}



export default Shop;