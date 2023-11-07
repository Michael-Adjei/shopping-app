import React from 'react'
import logo from '../asserts/logoM.png'
import payment from '../asserts/creditCard.jpg'
import {FaCcAmazonPay,FaCcApplePay,FaCcPaypal,FaCcStripe,FaCcVisa, FaHome} from 'react-icons/fa'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsFillPersonFill, BsPaypal} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-backUpFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-5 p-10 md:grid-cols-4  '>
         <div className='flex flex-col gap-7'>
            <img src={logo} alt="" className='w-20 h-16 my-1 mx-1 rounded-lg' />
            <p className='text-white text-sm tracking-wide'>Created By Michael</p>
             <div className='flex items-center text-white gap-2  '>
                <FaCcAmazonPay size={32} />
                <FaCcApplePay size={32}/>
                <FaCcPaypal size={32}/>
                 <FaCcStripe size={32}/>
                 <FaCcVisa size={32}/>
             </div>
             <div className='flex items-center text-white bg-black gap-5'>
               <BsFacebook size={32} className='hover:text-gray-400 duration-300 cursor-pointer'/>
               <BsInstagram size={32} className='hover:text-gray-400 duration-300 cursor-pointer'/>
               <BsTwitter size={32} className='hover:text-gray-400 duration-300 cursor-pointer'/>
               <BsGithub size={32} className='hover:text-gray-400 duration-300 cursor-pointer'/>
             </div>
         </div>
         <div>
           <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
           <div className='text-base flex flex-col gap-2'>
            <p>Mickey__loo</p>
            <p>Mobile : 12345678</p>
            <p>Email : m.adjei92@yahoo.com</p>
          </div>
        </div>

      <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
     <div className='flex flex-col gap-2 text-base'>
         <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsFillPersonFill/></span>My Account</p>
         <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>Checkout</p>
         <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>Track Order</p>
         <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BiSupport/></span>Help & Support</p>
         </div>
      </div>

      <div className='flex flex-col justify-center'>
      <input type='text' className='bg-transparent border px-4 py-4 text-sm rounded-lg' placeholder='E-mail'/>
      <button className='text-sm border text-white border-t-0 
       hover:bg-gray-900 active:bg-white active:text-black rounded-xl '>Subscribe</button>
      </div>  
   </div>

     
    </div>
  )
}

export default Footer
