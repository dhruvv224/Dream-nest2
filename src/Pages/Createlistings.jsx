import React, { useState } from 'react'
import { categories,types,facilities } from '../Data'
import Navbar from '../Components/Navbar'
const Createlistings = () => {
    const [category,setCategory]=useState('')
    const handlePost=()=>{

    }
  return (
    <div>
        <Navbar/>
        <div className='create-listing'>
            <h1>Publish Your Place</h1>
            <form onSubmit={handlePost}>
                <div className='create-listings_step1'>
                <h2>Step 1: Tell us about your place</h2>
                <hr />
                <h3>Which of these categories best describes your place?</h3>
                <div className='category-list'>
                    {
                        categories.map((item,index)=>(
                            <div className='category' key={index} onClick={()=>setCategory(item.label)}>
                                <div className="category_icon">{item.icon}</div>
                                <p>{item.label}</p>
                            </div>
                        ))
                    }

                </div>
                </div>

            </form>

        </div>
    </div>
  )
}

export default Createlistings