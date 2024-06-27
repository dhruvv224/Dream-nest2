import React from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
const wishList=useSelector((state)=>state.wishList)
console.log(wishList)
  return (
    <div>WishList</div>
  )
}

export default WishList