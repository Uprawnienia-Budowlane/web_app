import {ThreeInOneIcon} from "../Icons";
import Products from "./components/Products/Products";
import React, {useState, useEffect} from "react";

import { commerce } from "./lib/commerce";

const Shop = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

    /* const [category, setCategory] = useState(0); */
    
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
            </div>

        <Products products={products} />

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
        </div>
    );
}

export default Shop;