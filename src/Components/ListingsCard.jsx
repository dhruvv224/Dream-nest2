import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const ListingsCard = () => {

    const {id}=useParams()
    console.log(id)
    const[listing,setListing]=useState(null)
    // const listings=useSelector((state)=>state.listings)
    // const listingById=listings.filter(item=>item._id===id)
    // console.log(listingById)
    const fetchData=async()=>{
try {
  const response=await axios.get(`http://localhost:8000/api/listings/${id}`)
  const data=response.data.listing
  console.log(data)
  console.log(response)
  setListing(data)
  
} catch (error) {
  
}

    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      <div>
        {
          listing.map((item,index)=>(
            <div className='' key={index}>
              <div className='description'>
                {item.description}
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListingsCard