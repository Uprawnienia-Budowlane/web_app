import React from 'react'
import Product from './Product'
import { ThreeInOneIcon } from "../../../Icons";
import { Link } from 'react-router-dom';

const Products = ({ products, onAddToCart, totalItems  }) => {

    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box">
        <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
            </div>
           <div className="flex flex-row flex-nowrap overflow-x-scroll gap-8 max-w-full px-10 mb-3 hidden-scrollbar" style={{minHeight: 'min-content'}}>
            
     
                    {products.map((product) => (
                        <Product product={product} onAddToCart={onAddToCart}/>   
                    ))} 
          
          </div>
            <div className="mx-auto mb-8 flex flex-col space-y-3 md:space-y-0 md:flex-row w-5/6">
                <button
                    /* onClick={() => setCategory(0)} */
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 0 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    3w1
                </button>
                <button
                    /* onClick={() => setCategory(1)} */
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 1 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    2w1
                </button>
                <button
                    /* onClick={() => setCategory(2)} */
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 2 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    2x
                </button>

            </div> 
           
         <div className="mx-auto mb-8 flex flex-col space-y-3 md:space-y-0 md:flex-row w-/6">
         <button id="cart_btn" className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-24 mx-2 w-full "/* + (category === 2 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>
         <Link to="/shop/checkout">Przejdź do finalizacji zakupu</Link>
         </button> 
         </div>
         </div>
         </>
    )
}

export default Products
