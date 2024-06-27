import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
const WishList = () => {
const Wishlist=useSelector((state)=>state.user.Wishlist)
console.log(Wishlist)
  return (
    <div>
        <Navbar/>
        <h1 className='title list'> Your Wish Lists are</h1>
        <div className='list grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                Wishlist.map((item,index)=>(
                    <div className='relative cursor-pointer p-[10px] hover:border border-solid border-gray-200 rounded-2xl duration-150' key={index}>
                          <div className='slide-container mb-[10px] mt-[10px] overflow-hidden'>
                          <div className='slider flex transition-transform duration-500 ease-in-out ' style={{ transform: `translateX(-${item.currentIndex * 300}px)` }}>
                            {
                                item.listingPhotoPaths.map((photoPath,index)=>(
                                    <div className=' w-[300px] h-[270px] flex-shrink-0' key={index}>
                                      <img src={`http://localhost:8000/${photoPath}`} className='w-full h-full object-cover' alt={`${item.creator}`} />

                                  </div>
                                ))
                            }
                        </div>
                          </div>

                    </div>
                ))
            }


        </div>
    </div>
  )
}

export default WishList