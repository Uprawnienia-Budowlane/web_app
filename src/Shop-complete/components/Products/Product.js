import { ThreeInOneIcon } from "../../../Icons";
import {CheckboxCircleIcon, TagIcon} from "../../../Icons";
import ImageShopItem from '../../images/shop_item-img.svg'

import { Link, useLocation } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {

    console.log(product)

    return(
        <>
    <div className="mb-3 rounded-2xl bg-blue-50 flex flex-col w-80 main-change-dark-mode" style={{minWidth: '300px'}}>
    <div className="mx-4 mt-8 flex flex-row justify-between main-change-dark-mode">
        <p className="text-blue-500 opacity-60 my-auto">Pakiet</p>
        <div className="my-auto"><TagIcon/></div>
    </div>
    <p className="mx-4 mt-4 text-xl text-blue-500 font-semibold">{product.name}</p>
    <div className="mx-4 mt-2 flex flex-row main-change-dark-mode">
        <p className="text-xl text-blue-500 font-medium">{product.price.formatted} zł</p>
        <p className="ml-2 text-blue-500 opacity-60 my-auto font-medium">/ za sztukę</p>
    </div>
    <p className="mx-4 mt-4 mb-2 overflow-clip text-blue-500 text-sm">
        <p dangerouslySetInnerHTML={{ __html: product.description }}/>
    </p>

     <img style={{height: '65px', width: '200px', alignSelf: 'center', margin: '20px 0px -10px'}} src={ImageShopItem}></img>

    <div className="mx-auto mt-4"></div>
    <button className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4" component={Link} to="/cart" onClick={() => onAddToCart(product.id, 1)}>
        Zakup produkt
    </button>
    </div>
        </> 
    )

} 

export default Product;