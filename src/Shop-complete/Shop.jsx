import {ThreeInOneIcon} from "../Icons";
import Cart from './components/Cart/Cart'
import Products from "./components/Products/Products";
import Checkout from './components/CheckoutForm/Checkout'
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import {Prompt, Route, Switch } from "react-router-dom";

import ExamEnd from '../modals/ExamEnd'

import './scss/shop.css'

import { commerce } from "./lib/commerce";

const Shop = () => {

    const [products, setProducts] = useState([])
    const [order,  setOrder] = useState({})
    const [cart, setCart] = useState({})
    const [errorMessage,  setErrorMessage] = useState('')

    const [modal, setModal] = useState(false);
    const [nextLocation, setNextLocation] = useState('');
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

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

    const refreshCart = async() => {
        const newCart = await commerce.cart.refresh()

        setCart(newCart)

    }
      
    const handleCaptureCheckout = async( checkoutTokenId, newOrder ) => {

      try{
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

         
          setOrder(incomingOrder)
          refreshCart()
      } catch (error) {
        setErrorMessage(error.data.error.message)
    }
  }

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
        <Router>
          <Switch>
          <Route exact path='/shop'>
          <Products 
          products={products} 
          onAddToCart={handleAddToCart} 
          totalItems={cart.total_items}
          />
          </Route>
          <Route exact path='/shop/checkout'>
          <Checkout
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMessage}
          />
          </Route>
          </Switch>
        </Router>
        </>        
    );
}



export default Shop;