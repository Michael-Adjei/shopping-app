import React,{useState} from 'react'
import { BannerSlide } from '../ImageSlide'
import {BsFillCaretLeftFill,BsFillCaretRightFill} from 'react-icons/bs'

const Banner = () => {
    const [currentSlide , setCurrentSlide] = useState(0)
   
    const previousSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1 )
    }
   
    const nextSlide = () => {
      setCurrentSlide( currentSlide === 4 ? 0 : (next) => next + 1 )
    }


  return (
    <div className='w-full h-auto overflow-x-hidden ' >
      <div className='w-screen  relative'>
          <div className=' w-[400vw] h-full flex '>
               {
                BannerSlide.map((slider) => {
                    return <div >
                        <div className= ' w-[100vw] h-[100vh] object-contain transition-transform duration-1000' style={{
                           transform : `translateX(-${currentSlide * 100}vw)`
                        }
                        }>
                             <img className=' w-screen h-full object-cover opacity-90 transition ease-out duration-300' src={slider.slide} alt="" />
                        </div>
                         <div className='flex absolute w-fit bottom-44 left-0 right-0 mx-auto gap-10'>
                              <div onClick={previousSlide}  className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                              justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                                 <BsFillCaretLeftFill size={50}/>
                              </div>
                              <div onClick={nextSlide}  className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                              justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                                  <BsFillCaretRightFill size={50}/>
                              </div>
                         </div>
                    </div>
                })
               }
          </div>
      </div>
    </div>
  )
}

export default Banner
 