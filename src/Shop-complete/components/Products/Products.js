import React from 'react'
import Product from './Product'
import { ThreeInOneIcon } from "../../../Icons";

const Products = ({ products }) => {

    return (
           <div className="flex flex-row flex-nowrap overflow-x-scroll gap-8 max-w-full px-10 mb-3 hidden-scrollbar"
                 style={{minHeight: 'min-content'}}>
                    {products.map((product) => (
                        <Product product={product}/>   
                    ))}     
            </div>  
    )
}

export default Products
