import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ListingsCard = () => {
    const id=useParams()
    console.log(id)
    // const listings=useSelector((state)=>state.listings)
    // const listingById=listings.filter(item=>item._id===id)
    // console.log(listingById)
    const fetchData=async()=>{
try {
  const response=await axios.get(`http://localhost:8000/api/listings/id/${id}`)
  console.log(response)
  
} catch (error) {
  
}

    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>ListingsCard</div>
  )
}

export default ListingsCard