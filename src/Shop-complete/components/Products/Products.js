import React, {useState} from 'react'
import Product from './Product'
import { ThreeInOneIcon } from "../../../Icons";
import { Link } from 'react-router-dom';

import mobile_arrow_ from '../../../photos/mobile_arrow.svg'

const Products = ({ products, onAddToCart, totalItems  }) => {

    const [category, setCategory] = useState(0);

    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box css-shop-little-fix">

        <div className="mobile_bar_itself shadow-xl">
        <img src={mobile_arrow_}></img>
        <div className="flex flex-col px-2 my-8 ml-0 mx-6">
        <p className="text-blue-500">Uprawnienia budowlane</p>
        <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
        </div>
        </div>
        
        <div className="mx-auto mb-8 flex flex-col space-y-3 mt-8 md:space-y-0 md:flex-row w-5/6 Desktop_hide">
                <select
                    /*onClick={() => setCategory(0)}*/
                    className={"rounded-2xl bg-blue border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 0 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    <option>PAKIETY 3w1</option>
                    <option>PAKIETY 2w1</option>
                    <option>PAKIETY 2x</option>
                </select>
        </div> 
        <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8 Mobile_hide">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
            </div>
           <div className="flex flex-row flex-nowrap overflow-x-scroll gap-8 max-w-full px-10 mb-12 sm:mb-12 hidden-scrollbar" style={{minHeight: 'min-content'}}>
            
     
                    {products.map((product) => (
                        <Product product={product} onAddToCart={onAddToCart}/>   
                    ))} 
          
          </div>
            <div className="mx-auto mb-8 flex flex-col space-y-3 md:space-y-0 md:flex-row w-5/6 Mobile_flex_hide">
                <button
                    /*onClick={() => setCategory(0)}*/
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 0 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    3w1
                </button>
                <button
                    /*onClick={() => setCategory(1)}*/
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 1 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    2w1
                </button>
                <button
                    /*onClick={() => setCategory(2)}*/
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full "/* + (category === 2 ? 'bg-blue-500 text-white' : 'text-blue-500')*/}>PAKIETY
                    2x
                </button>

            </div> 
         </div>
         </>
    )
}

export default Products
