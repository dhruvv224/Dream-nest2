import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ListingsCard = () => {
    const id=useParams()
    console.log(id)
    const listings=useSelector((state)=>state.listings)
    const listingById=listings.filter(item=>item._id===id)
    console.log(listingById)
  return (
    <div>ListingsCard</div>
  )
}

export default ListingsCard