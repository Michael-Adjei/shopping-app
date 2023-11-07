import React from 'react'
import logo from '../asserts/logoM.png'
import {AiOutlineShopping} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const productData = useSelector((state) => state.mickey.productData);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-lg h-full mx-auto flex items-center justify-between'>
      <Link to='/'>
      <div>
        <img src={logo} alt="logo" className='hidden md:block w-20 h-16 my-1 mx-1 rounded-lg' />
      </div>
      </Link>

      <div className='flex justify-center items-center gap-8'>
          <ul className='flex justify-center items-center gap-8'>
             <li className='text-base text-black font-bold font-titleFont
              hover:text-orange-900 hover:underline 
              underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
             <li className='text-base text-black font-bold font-titleFont
              hover:text-orange-900 hover:underline 
              underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
             <li className='text-base text-black font-bold font-titleFont
              hover:text-orange-900 hover:underline 
              underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
             <li className='text-base text-black font-bold font-titleFont
              hover:text-orange-900 hover:underline 
              underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
             <li className='text-base text-black font-bold font-titleFont
              hover:text-orange-900 hover:underline 
              underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
          </ul>
         <Link to='/cart'>
         <div className='relative'>
            <AiOutlineShopping size={36}/>
            <span className='absolute w-7 top-2 left-1 my-1 text-sm flex justify-center items-center font-extrabold
             '>{productData.length}</span>
         </div>
         </Link>
         <img className='w-8 h-8 rounded-full object-cover' src="https://scontent.fgla3-1.fna.fbcdn.net/v/t39.30808-6/373537447_10228309000421740_5925095167370786292_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=dEn4ks0nt5QAX_eo-IJ&_nc_ht=scontent.fgla3-1.fna&oh=00_AfC2uxC3tC6CNL8Yjy4wee7UN1oZflr_8-8xXi0g-zw5AA&oe=65247336" alt="" />
      </div>
      </div>
     
    </div>
  )
}

export default Header
