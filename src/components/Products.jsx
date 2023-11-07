import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
         <h1 className='font-titleFont font-extrabold text-2xl bg-black text-white 
         py-2 w-80 text-center rounded-xl'>Number One Shopping Hub </h1>
         <span className='w-20 h-[3px] bg-black'></span>
         <p className='max-w-[700px] text-gray-600 text-center mx-5'>
         "What you wear is how you present yourself to the world, especially today, when human 
         contacts are so quick. Fashion is instant language." —Miuccia Prada
         </p>
      </div>

      <div className='max-w-screen-xl mx-auto grid grid-cols-2 py-10 md:grid md:grid-cols-4 gap-10 '>
          {
            products.map((item) => {
              return (
                <ProductCard key={item._id} product={item}/>
              )
            })
          }
      </div>
    </div>
  )
}

export default Products
