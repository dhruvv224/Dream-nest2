import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import { Favorite } from '@mui/icons-material'
import { setListings } from '../Store/Slice'
import { useDispatch } from 'react-redux'
import { setWishList } from '../Store/Slice'
import { Link } from 'react-router-dom'
const WishList = () => {
    const dispatch=useDispatch();
const Wishlist=useSelector((state)=>state.user.Wishlist)
const listings=useSelector((state)=>state.user.listings);

console.log(Wishlist)
const toggleWishlist=(index)=>{
    
    const updatedListings=[...listings];
    updatedListings[index]={...updatedListings[index],liked: !updatedListings[index].liked}
    dispatch(setListings({listings:updatedListings}))
    const likedItems=updatedListings.filter(item=>item.liked)
    console.log("liked items >>>>>>",likedItems)
    dispatch(setWishList({Wishlist:likedItems}))

}
  return (
    <>
   
    <Navbar/>
    <div className='p-5'>
       
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
                                      {
                                                            !item.liked ? (
                                                                <Favorite className={`absolute top-3 right-3 text-white hover:text-gray-100 duration-100 ${item.liked ? 'text-red-600' : 'text-white'}`} onClick={() => toggleWishlist(index)} />

                                                            ):(
                                                                <Favorite className={`absolute top-3 right-3 text-red-500 hover:text-red-600 duration-100`} onClick={() => toggleWishlist(index)} />

                                                            )
                                                        }
                                  </div>
                                ))
                            }
                        </div>
                          </div>
                          <div className='flex flex-col'>
                            <Link to={`/listings/${item._id}`}>
                            <h1 className='text-[16px] font-semibold'>
                                                {item.title}
                                            </h1>
                                            <h4 className='text-[15px]'>{item.category}</h4>
                                            <h3 className='text-[15px]'>{item.type}</h3>
                                            <div className='flex items-center'>
                                                <h5 className='text-[15px] font-medium'>₹{item.price}</h5>
                                                {item.category === "Iconic cities" ? (
                                                    <span className='inline ml-1'>Per Month</span>
                                                ) : (
                                                    <span className='inline ml-1'>Per Night</span>
                                                )}
                                            </div>
                            </Link>
                            </div>

                    </div>
                ))
            }


        </div>
    </div>
    </>
  )
}

export default WishList