import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import shop4 from '../asserts/shop4.jpg'
import CartItem from '../components/CartItem'


const Cart = () => {
  const productData = useSelector((state) => state.mickey.productData);
  const [totalAmt,setTotalAmt] = useState('');

  useEffect(()=> {
    let price = 0;
    productData.map((item)=> {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price)
  },[productData])
  return (
    <div>
       <img className='w-full h-60 object-cover' src={shop4} alt="shop picture" />
     <div className='flex max-w-screen-xl mx-auto py-20 '>
      <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
               <h2 className='text-2xl font-bold'> Cart Total</h2>
               <p className='flex items-center gap-4 text-base'>
                Subtotal {''}
                <span className='font-backUpFont font-bold text-lg'>
                  £{totalAmt}
                </span>
               </p>
               <p className='flex items-start gap-4 text-base'>
                Shipping{''}
                <span>
                  Hope you enjoy your selected product and hope to see you again soon
                </span>
               </p>
            </div>
            <p className='font-backUpFont font-semibold flex justify-between mt-6'>
              {''} Total <span className='text-xl font-bold'>£{totalAmt}</span></p>
              <button className='text-base bg-black text-white w-full py-3 mt-6'>
                Proceed To Checkout</button>
        </div>
     </div>
     
    </div>
  )
}

export default Cart
