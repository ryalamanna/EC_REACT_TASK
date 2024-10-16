import React from 'react'
import { useProducts } from '../../../context/products.context';

const ProductCard = ({product}) => {
    const {id , title ,price, image}= product;
    const { addToCart } = useProducts();
    
  return (
    <div className='w-full md:w-[45%] lg:w-[20%] mx-10 md:mx-2 my-10 flex flex-wrap align-center justify-center px-2'>
        <img className='h-[200px]' src={image} alt="Product Image" />
        <h2 className=' font-semibold w-full mt-3 text-center lg:text-start'>{title.slice(0,20)}</h2>
        <p className="text-[#fe7d53] w-full font-bold mt-2 text-center lg:text-start">${price}</p>
        <div className="w-full text-center lg:text-start">
            <button onClick={()=>{
              addToCart(product)
            }} className='bg-[#fe7d53] rounded text-white py-1.5 px-4 mt-3 shadow-lg font-bold text-sm transition hover:-translate-y-1'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductCard